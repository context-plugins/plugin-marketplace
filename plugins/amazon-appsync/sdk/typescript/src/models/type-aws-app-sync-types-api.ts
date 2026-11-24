import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  formatAwsAppSyncTypesApiSchema,
  type FormatAwsAppSyncTypesApi,
} from "./format-aws-app-sync-types-api.js";

export type TypeAwsAppSyncTypesApi = {
  /** The type name. */
  name?: string;
  /** The type description. */
  description?: string;
  /** The type Amazon Resource Name (ARN). */
  arn?: string;
  /** The type definition. */
  definition?: string;
  /** The type format: SDL or JSON. */
  format?: FormatAwsAppSyncTypesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const typeAwsAppSyncTypesApiSchema: Schema<TypeAwsAppSyncTypesApi> = s.object<TypeAwsAppSyncTypesApi>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    arn: s.optional(s.string()),
    definition: s.optional(s.string()),
    format: s.optional(s.lazy(() => formatAwsAppSyncTypesApiSchema)),
  },
  { additionalProperties: s.json() },
);
