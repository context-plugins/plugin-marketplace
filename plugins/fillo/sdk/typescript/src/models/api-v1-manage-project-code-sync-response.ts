import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

export type ApiV1ManageProjectCodeSyncResponse = {
  policy: Policy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectCodeSyncResponseSchema: Schema<ApiV1ManageProjectCodeSyncResponse> =
  s.object<ApiV1ManageProjectCodeSyncResponse>(
    {
      policy: policySchema,
    },
    { additionalProperties: s.json() },
  );
