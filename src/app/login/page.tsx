'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';
import GoogleLogo from '../../../public/logos/google-logo.png';
import GithubLogo from '../../../public/logos/github-logo.png';
import { signIn } from 'next-auth/react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await signIn('email', { email: data.email, callbackUrl: '/home' });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-2xl font-bold text-center">
          ログイン
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  メールアドレス
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  className="w-full"
                  {...register('email', { required: true })}
                />
              </div>
              <Button type="submit" className="w-full">
                メールでログイン
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  または
                </span>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <Button
                onClick={() => signIn('github', { callbackUrl: '/home' })}
                className="bg-white"
                size={'icon'}
                variant={'ghost'}
              >
                <Image src={GithubLogo} alt="Google logo" />
              </Button>
              <Button
                onClick={() => signIn('google', { callbackUrl: '/home' })}
                className="bg-white"
                size={'icon'}
                variant={'ghost'}
              >
                <Image src={GoogleLogo} alt="Google logo" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
