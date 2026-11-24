import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeAwsAppSyncTypesApiSchema, type TypeAwsAppSyncTypesApi } from "./type-aws-app-sync-types-api.js";

export type CreateTypeResponse = {
  type?: TypeAwsAppSyncTypesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTypeResponseSchema: Schema<CreateTypeResponse> = s.object<CreateTypeResponse>(
  {
    type: s.optional(s.lazy(() => typeAwsAppSyncTypesApiSchema)),
  },
  { additionalProperties: s.json() },
);
