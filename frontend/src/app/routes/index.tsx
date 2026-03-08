import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import { ProtectedLayout } from "./ProtectedLayout";

// We'll import actual page components later
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      // Public routes (no auth required)
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },

      // Protected routes ( required auth)
      {
        path: "/",
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: (
              <div className="p-8">
                Welcome to Dashboard! (You are logged in)
              </div>
            ),
          },
          {
            path: "room",
            element: <div>Room List Page</div>,
          },
          // We'll add /chat/:roomId later
        ],
      },
      // catch-all redirect
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

export default router;
