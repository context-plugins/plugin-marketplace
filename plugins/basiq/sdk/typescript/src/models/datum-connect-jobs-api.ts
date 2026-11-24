import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1ConnectJobsApiSchema, type Code1ConnectJobsApi } from "./code1-connect-jobs-api.js";
import {
  sourceConnectAuthenticationApiSchema,
  type SourceConnectAuthenticationApi,
} from "./source-connect-authentication-api.js";

export type DatumConnectJobsApi = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code, expressed as a string value. */
  code: Code1ConnectJobsApi;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source?: SourceConnectAuthenticationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumConnectJobsApiSchema: Schema<DatumConnectJobsApi> = s.object<DatumConnectJobsApi>(
  {
    type: s.string(),
    title: s.optional(s.string()),
    code: code1ConnectJobsApiSchema,
    detail: s.optional(s.string()),
    source: s.optional(s.lazy(() => sourceConnectAuthenticationApiSchema)),
  },
  { additionalProperties: s.json() },
);
