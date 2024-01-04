export const makeRequest =
  (baseUrl: string) => (path: string, options: RequestInit | undefined) =>
    new Promise((resolve: (res: any) => void) => {
      fetch(`${baseUrl}/${path}`, options)
        .then(async (res) => await res.json())
        .then(resolve)
        .catch(resolve);
    });
