import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codePlatformPayeesApiSchema, type CodePlatformPayeesApi } from "./code-platform-payees-api.js";
import { sourcePlatformPayeesApiSchema, type SourcePlatformPayeesApi } from "./source-platform-payees-api.js";

export type DatumPlatformPayeesApi = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code. */
  code: CodePlatformPayeesApi;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  source?: SourcePlatformPayeesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumPlatformPayeesApiSchema: Schema<DatumPlatformPayeesApi> = s.object<DatumPlatformPayeesApi>(
  {
    type: s.string(),
    title: s.optional(s.string()),
    code: codePlatformPayeesApiSchema,
    detail: s.optional(s.string()),
    source: s.optional(s.lazy(() => sourcePlatformPayeesApiSchema)),
  },
  { additionalProperties: s.json() },
);
