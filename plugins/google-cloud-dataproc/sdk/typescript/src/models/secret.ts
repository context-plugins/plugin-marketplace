import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A securely stored value. */
export type Secret = {
  /**
   * Optional. The relative resource name of a Secret Manager secret version, in the following
   * form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}.
   */
  cloudSecret?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const secretSchema: Schema<Secret> = s.object<Secret>(
  {
    cloudSecret: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
