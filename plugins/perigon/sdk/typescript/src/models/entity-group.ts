import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Entity groups the monitor identifies in matching content. */
export type EntityGroup = {
  /** Reference name used to identify the entity group in monitor output. */
  groupReference: string;
  /** Optional plain-language description of the entities represented by the group. */
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityGroupSchema: Schema<EntityGroup> = s.object<EntityGroup>(
  {
    groupReference: s.string(),
    description: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
