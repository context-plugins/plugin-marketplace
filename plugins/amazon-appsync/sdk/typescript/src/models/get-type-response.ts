import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeAwsAppSyncTypesApiSchema, type TypeAwsAppSyncTypesApi } from "./type-aws-app-sync-types-api.js";

export type GetTypeResponse = {
  type?: TypeAwsAppSyncTypesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTypeResponseSchema: Schema<GetTypeResponse> = s.object<GetTypeResponse>(
  {
    type: s.optional(s.lazy(() => typeAwsAppSyncTypesApiSchema)),
  },
  { additionalProperties: s.json() },
);
