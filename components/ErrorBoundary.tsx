import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (
                <div className="p-6 bg-red-900/50 text-white rounded-lg border border-red-500 m-4">
                    <h2 className="text-xl font-bold mb-2">오류가 발생했습니다 (Error)</h2>
                    <p className="mb-4">스튜디오 로딩 중 문제가 발생했습니다.</p>
                    <pre className="bg-black/50 p-4 rounded text-xs font-mono whitespace-pre-wrap overflow-auto max-h-[300px]">
                        {this.state.error?.toString()}
                        {this.state.error?.stack}
                    </pre>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white font-bold"
                    >
                        새로고침
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
