import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageSyncTokensResponse1 = {
  /** The `fsync_` plaintext. Shown once — store it now. */
  token: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageSyncTokensResponse1Schema: Schema<ApiV1ManageSyncTokensResponse1> =
  s.object<ApiV1ManageSyncTokensResponse1>(
    {
      token: s.string(),
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
