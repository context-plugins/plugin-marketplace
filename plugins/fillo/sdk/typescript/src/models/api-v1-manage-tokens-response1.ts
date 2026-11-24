import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageTokensResponse1 = {
  id: string;
  /** @default "True" */
  revoked?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageTokensResponse1Schema: Schema<ApiV1ManageTokensResponse1> =
  s.object<ApiV1ManageTokensResponse1>(
    {
      id: s.string(),
      revoked: s.defaulted(s.literal("True"), "True"),
    },
    { additionalProperties: s.json() },
  );
