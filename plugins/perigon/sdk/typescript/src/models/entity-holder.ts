import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Named entities extracted from the article. */
export type EntityHolder = {
  /** Text value of the extracted entity. */
  data?: string | null;
  /** Entity type, such as PERSON, ORGANIZATION, or LOCATION. */
  type?: string | null;
  /** Number of times the entity appears in the article. */
  mentions?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityHolderSchema: Schema<EntityHolder> = s.object<EntityHolder>(
  {
    data: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    mentions: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
