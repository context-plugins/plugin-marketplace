import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChecksContentDtoGroup = {
  groupType?: string;
  identity?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checksContentDtoGroupSchema: Schema<ChecksContentDtoGroup> = s.object<ChecksContentDtoGroup>(
  {
    groupType: s.optional(s.string()),
    identity: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
