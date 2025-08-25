// Ambient module declarations so @intelihub-app/react-native can build
// independently of sibling RN packages being built/installed.

declare module '@aws-amplify/rtn-web-browser' {
	export interface WebBrowserModule {
		openAuthSessionAsync(...args: any[]): Promise<any>;
	}
	export const module: WebBrowserModule;
}

declare module '@aws-amplify/rtn-push-notification' {
	export type PushNotificationModule = Record<string, any>;
	export const module: PushNotificationModule;
}
