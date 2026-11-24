import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

/** Details on why a resource update failed in the runtime. */
export type GoogleCloudApigeeV1UpdateError = {
  /**
   * The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig).
   * If empty the error refers to the top level resource.
   */
  resource?: string;
  /** User-friendly error message. */
  message?: string;
  /** Status code. */
  code?: Code;
  /**
   * A string that uniquely identifies the type of error. This provides a more reliable means to
   * deduplicate errors across revisions and instances.
   */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1UpdateErrorSchema: Schema<GoogleCloudApigeeV1UpdateError> =
  s.object<GoogleCloudApigeeV1UpdateError>(
    {
      resource: s.optional(s.string()),
      message: s.optional(s.string()),
      code: s.optional(s.lazy(() => codeSchema)),
      type: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
