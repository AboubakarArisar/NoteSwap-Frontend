import { Camera, Mail, User } from 'lucide-react';
import { Card } from '../UI/Card';

export function ProfileHeader() {
  return (
    <Card className="relative">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl" />
      <div className="px-6 pb-6">
        <div className="relative flex items-end -mt-16 mb-4">
          <div className="relative w-32 h-32 rounded-full border-4 border-white bg-white">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="ml-6 pb-2">
            <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
            <div className="flex items-center mt-1 text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span>john.doe@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}