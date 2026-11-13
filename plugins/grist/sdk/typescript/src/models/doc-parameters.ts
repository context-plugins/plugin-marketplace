import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocParameters = {
  name?: string;
  isPinned?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docParametersSchema: Schema<DocParameters> = s.object<DocParameters>(
  {
    name: s.optional(s.string()),
    isPinned: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
