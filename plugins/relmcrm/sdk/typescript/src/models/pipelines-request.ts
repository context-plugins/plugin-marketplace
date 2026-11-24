import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PipelinesRequest = {
  /** New display name */
  name?: string;
  /** New pipeline key (slugified); deals follow by internal id. */
  key?: string;
  isDefault?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelinesRequestSchema: Schema<PipelinesRequest> = s.object<PipelinesRequest>(
  {
    name: s.optional(s.string()),
    key: s.optional(s.string()),
    isDefault: s.optional(s.boolean()),
    _keysMap: {
      isDefault: "is_default",
    },
  },
  { additionalProperties: s.json() },
);
