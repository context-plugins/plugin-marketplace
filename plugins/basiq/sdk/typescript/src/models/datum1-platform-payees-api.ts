import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum1PlatformPayeesApi = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code. @default "resource-not-found" */
  code?: "resource-not-found";
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1PlatformPayeesApiSchema: Schema<Datum1PlatformPayeesApi> =
  s.object<Datum1PlatformPayeesApi>(
    {
      type: s.string(),
      title: s.optional(s.string()),
      code: s.defaulted(s.literal("resource-not-found"), "resource-not-found"),
      detail: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
