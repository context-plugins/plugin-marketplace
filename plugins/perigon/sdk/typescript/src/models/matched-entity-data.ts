import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Entities matched in the content that produced the event. */
export type MatchedEntityData = {
  /** Name of the entity matched in the source content. */
  name: string;
  /** Entity type assigned by the monitor. */
  type: string;
  /** Domain associated with the matched entity, when available. */
  domain?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchedEntityDataSchema: Schema<MatchedEntityData> = s.object<MatchedEntityData>(
  {
    name: s.string(),
    type: s.string(),
    domain: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
