import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1EmailDomainsRequest = {
  /**
   * The hostname you will send from, e.g. `mail.acme.com`. Ours and public mailbox providers are
   * refused.
   */
  domain: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EmailDomainsRequestSchema: Schema<ApiV1EmailDomainsRequest> =
  s.object<ApiV1EmailDomainsRequest>(
    {
      domain: s.string(),
    },
    { additionalProperties: s.json() },
  );
