import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageSyncTokensResponse2 = {
  id: string;
  /** @default "True" */
  revoked?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageSyncTokensResponse2Schema: Schema<ApiV1ManageSyncTokensResponse2> =
  s.object<ApiV1ManageSyncTokensResponse2>(
    {
      id: s.string(),
      revoked: s.defaulted(s.literal("True"), "True"),
    },
    { additionalProperties: s.json() },
  );
