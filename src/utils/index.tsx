interface IStatus {
	[key: string]: string;
}

export const status: IStatus = {
	High: "error",
	Medium: "warning",
	Low: "success",
};
