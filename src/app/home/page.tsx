import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center  p-4">
      <Card className="w-[400px] shadow-lg">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">ログイン成功</h2>
            <p className="mt-2 text-sm text-gray-600">
              正常にログインが完了しました
            </p>
          </div>
        </CardHeader>

        <CardFooter className="flex flex-col gap-3 p-6">
          <Button className="w-full" variant="outline">
            ログアウト
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;
