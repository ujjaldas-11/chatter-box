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
              <div className="container max-auto p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Welcome to ChatterBox Dashboard
                </h2>
                <p className="text-muted-foreground">
                  You are successfully logged in. Next up: chat rooms!
                </p>
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
