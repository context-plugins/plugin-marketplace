import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Known journalist records matched to the article byline. */
export type IdNameHolder = {
  /** Unique identifier for the matched record. */
  id?: string | null;
  /** Display name of the matched record. */
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const idNameHolderSchema: Schema<IdNameHolder> = s.object<IdNameHolder>(
  {
    id: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
