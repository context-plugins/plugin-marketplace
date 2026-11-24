import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudflowBundleTableField = {
  name: string;
  dataType: string;
  isUnique?: boolean;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowBundleTableFieldSchema: Schema<CloudflowBundleTableField> =
  s.object<CloudflowBundleTableField>(
    {
      name: s.string(),
      dataType: s.string(),
      isUnique: s.optional(s.boolean()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
