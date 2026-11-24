import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * A project secret key (`fsk_…`). Scopes: forms:read, responses:read, respondents:read,
   * responses:export, forms:write, forms:publish, storage:manage, webhooks:manage, settings:manage,
   * integrations:manage, responses:manage, members:manage, workspace:manage, forms:delete,
   * responses:delete, respondents:delete, workspace:delete. A request for a scope the key lacks
   * returns 403 with a stable message naming the scope (e.g. `This key lacks the responses:export
   * scope.`).
   *
   * @remarks
   * Unset, it is read from `FILLO_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
