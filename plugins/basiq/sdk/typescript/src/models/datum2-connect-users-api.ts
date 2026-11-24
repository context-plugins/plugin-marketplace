import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code2ConnectUsersApiSchema, type Code2ConnectUsersApi } from "./code2-connect-users-api.js";
import {
  sourceConnectAuthenticationApiSchema,
  type SourceConnectAuthenticationApi,
} from "./source-connect-authentication-api.js";

export type Datum2ConnectUsersApi = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code, expressed as a string value. */
  code: Code2ConnectUsersApi;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source: SourceConnectAuthenticationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum2ConnectUsersApiSchema: Schema<Datum2ConnectUsersApi> = s.object<Datum2ConnectUsersApi>(
  {
    type: s.string(),
    title: s.optional(s.string()),
    code: code2ConnectUsersApiSchema,
    detail: s.optional(s.string()),
    source: sourceConnectAuthenticationApiSchema,
  },
  { additionalProperties: s.json() },
);
