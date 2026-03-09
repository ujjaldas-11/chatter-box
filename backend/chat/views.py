from rest_framework.decorators import api_view
from rest_framework.response import Response       
from .models import Message
from .serializers import MessageSerializer

@api_view(['GET'])
def message_history(request):
    message = Message.objects.all()[:50]
    serializer = MessageSerializer(message, many=True)
    return Response(serializer.data)               

