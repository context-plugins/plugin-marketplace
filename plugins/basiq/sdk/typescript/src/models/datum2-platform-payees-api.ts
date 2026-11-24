import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1PlatformPayeesApiSchema, type Code1PlatformPayeesApi } from "./code1-platform-payees-api.js";

export type Datum2PlatformPayeesApi = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code. */
  code: Code1PlatformPayeesApi;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum2PlatformPayeesApiSchema: Schema<Datum2PlatformPayeesApi> =
  s.object<Datum2PlatformPayeesApi>(
    {
      type: s.string(),
      title: s.optional(s.string()),
      code: code1PlatformPayeesApiSchema,
      detail: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
