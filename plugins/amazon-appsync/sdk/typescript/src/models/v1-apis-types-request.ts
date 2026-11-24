import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  formatAwsAppSyncTypesApiSchema,
  type FormatAwsAppSyncTypesApi,
} from "./format-aws-app-sync-types-api.js";

export type V1ApisTypesRequest = {
  /**
   * The type definition, in GraphQL Schema Definition Language (SDL) format. For more information,
   * see the GraphQL SDL documentation.
   */
  definition: string;
  /** The type format: SDL or JSON. */
  format: FormatAwsAppSyncTypesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisTypesRequestSchema: Schema<V1ApisTypesRequest> = s.object<V1ApisTypesRequest>(
  {
    definition: s.string(),
    format: formatAwsAppSyncTypesApiSchema,
  },
  { additionalProperties: s.json() },
);
