import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * API key (dlv_…) created in Settings → API tokens, or an OAuth access token (dlvo_…). Every
   * route below can answer `401 auth_error` — the credential was not accepted — or `403
   * insufficient_scope`, which is a different thing: the credential is fine and was not issued with
   * the scope this route needs. Reissue it with that scope rather than replacing it with another of
   * the same ones. Older clients may still branch on `auth_error` for both.
   *
   * @remarks
   * Unset, it is read from `DELIVERD_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /**
   * Deliverd REST API (paths carry the /api/v1 prefix; https://deliverd.dev/llms.txt: "REST API:
   * https://deliverd.dev/api/v1")
   */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
