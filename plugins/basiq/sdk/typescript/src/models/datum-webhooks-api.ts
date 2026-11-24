import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceConnectAuthenticationApiSchema,
  type SourceConnectAuthenticationApi,
} from "./source-connect-authentication-api.js";

export type DatumWebhooksApi = {
  /** Type of the response, always "error". */
  type?: string;
  /** Application-specific error code, expressed as a string value. */
  code?: string;
  /** Title of the error. */
  title?: string;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source?: SourceConnectAuthenticationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumWebhooksApiSchema: Schema<DatumWebhooksApi> = s.object<DatumWebhooksApi>(
  {
    type: s.optional(s.string()),
    code: s.optional(s.string()),
    title: s.optional(s.string()),
    detail: s.optional(s.string()),
    source: s.optional(s.lazy(() => sourceConnectAuthenticationApiSchema)),
  },
  { additionalProperties: s.json() },
);
