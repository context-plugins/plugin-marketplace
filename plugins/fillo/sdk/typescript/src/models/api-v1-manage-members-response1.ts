import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageMembersResponse1 = {
  id: string;
  email: string;
  /** @default "True" */
  removed?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageMembersResponse1Schema: Schema<ApiV1ManageMembersResponse1> =
  s.object<ApiV1ManageMembersResponse1>(
    {
      id: s.string(),
      email: s.string(),
      removed: s.defaulted(s.literal("True"), "True"),
    },
    { additionalProperties: s.json() },
  );
