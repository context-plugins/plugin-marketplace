import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageAgentsResponse1 = {
  id: string;
  /** @default "True" */
  revoked?: "True";
  alreadyRevoked: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageAgentsResponse1Schema: Schema<ApiV1ManageAgentsResponse1> =
  s.object<ApiV1ManageAgentsResponse1>(
    {
      id: s.string(),
      revoked: s.defaulted(s.literal("True"), "True"),
      alreadyRevoked: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
