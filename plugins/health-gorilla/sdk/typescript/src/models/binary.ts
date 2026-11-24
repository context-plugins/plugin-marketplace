import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Binary = {
  resourceType?: string;
  id?: string;
  contentType?: string;
  data?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const binarySchema: Schema<Binary> = s.object<Binary>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    contentType: s.optional(s.string()),
    data: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
