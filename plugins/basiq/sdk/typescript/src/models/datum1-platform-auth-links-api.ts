import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  code1PlatformAuthLinksApiSchema,
  type Code1PlatformAuthLinksApi,
} from "./code1-platform-auth-links-api.js";

export type Datum1PlatformAuthLinksApi = {
  /** Application-specific error code, expressed as a string value. */
  code: Code1PlatformAuthLinksApi;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Title of the error */
  title?: string;
  /** Type of the response, always "error" */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1PlatformAuthLinksApiSchema: Schema<Datum1PlatformAuthLinksApi> =
  s.object<Datum1PlatformAuthLinksApi>(
    {
      code: code1PlatformAuthLinksApiSchema,
      detail: s.optional(s.string()),
      title: s.optional(s.string()),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
