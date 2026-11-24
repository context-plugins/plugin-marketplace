import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";
import {
  sourceConnectAuthenticationApiSchema,
  type SourceConnectAuthenticationApi,
} from "./source-connect-authentication-api.js";

export type Data3 = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code, expressed as a string value. */
  code: Code1;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source: SourceConnectAuthenticationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3Schema: Schema<Data3> = s.object<Data3>(
  {
    type: s.string(),
    title: s.optional(s.string()),
    code: code1Schema,
    detail: s.optional(s.string()),
    source: sourceConnectAuthenticationApiSchema,
  },
  { additionalProperties: s.json() },
);
