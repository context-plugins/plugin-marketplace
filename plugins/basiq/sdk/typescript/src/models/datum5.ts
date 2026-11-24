import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code4Schema, type Code4 } from "./code4.js";
import {
  sourceConnectAuthenticationApiSchema,
  type SourceConnectAuthenticationApi,
} from "./source-connect-authentication-api.js";

export type Datum5 = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code, expressed as a string value. */
  code: Code4;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source?: SourceConnectAuthenticationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum5Schema: Schema<Datum5> = s.object<Datum5>(
  {
    type: s.string(),
    title: s.optional(s.string()),
    code: code4Schema,
    detail: s.optional(s.string()),
    source: s.optional(s.lazy(() => sourceConnectAuthenticationApiSchema)),
  },
  { additionalProperties: s.json() },
);
