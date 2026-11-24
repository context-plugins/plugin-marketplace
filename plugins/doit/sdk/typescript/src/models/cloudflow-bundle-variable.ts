import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudflowBundleVariable = {
  key: string;
  name: string;
  description?: string;
  required?: boolean;
  type: string;
  elementType?: string;
  /**
   * Present unless the export stripped variable values. Connection-typed values are
   * `$req:connections/<key>` tokens.
   */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowBundleVariableSchema: Schema<CloudflowBundleVariable> =
  s.object<CloudflowBundleVariable>(
    {
      key: s.string(),
      name: s.string(),
      description: s.optional(s.string()),
      required: s.optional(s.boolean()),
      type: s.string(),
      elementType: s.optional(s.string()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
