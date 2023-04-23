import Head from "next/head";
import Link from "next/link";

export const Login = () => {
  return (
    <div>
      <Head>
        <title>로그인</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl p-6 mx-auto space-y-8 border border-gray-200 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            <h1 className="text-3xl font-bold">로그인</h1>
            <div className="flex flex-col items-center justify-center w-full space-y-4">
              <div className="flex flex-col items-center justify-center w-full space-y-2">
                <label className="text-sm font-bold">이메일</label>
                <input
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full space-y-2">
                <label className="text-sm font-bold">비밀번호</label>
                <input
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              로그인
            </button>
            <div className="flex flex-row items-center justify-center w-full space-x-2">
              <span>아직 회원이 아니신가요?</span>
              <Link
                href="/signup"
                className="text-blue-500 hover:text-blue-600 focus:text-blue-600"
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
