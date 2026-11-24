import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

export type ApiV1ManageProjectCodeSyncRequest = {
  policy: Policy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectCodeSyncRequestSchema: Schema<ApiV1ManageProjectCodeSyncRequest> =
  s.object<ApiV1ManageProjectCodeSyncRequest>(
    {
      policy: policySchema,
    },
    { additionalProperties: s.json() },
  );
