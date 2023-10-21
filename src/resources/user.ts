import { createCachedResource } from "solid-cached-resource";
import { Accessor } from "solid-js";

export const createGetUserById = (userId: Accessor<string>) => {
  return createCachedResource<unknown, null>(
    () => ["user", userId()],
    async (data: boolean) => {
      console.log(data);
      const response = fetch(`/users/${userId}`);
      return (await response).json();
    }
  );
};
