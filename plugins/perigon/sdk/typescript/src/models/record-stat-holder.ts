import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google Content Categories associated with the story and their article counts. */
export type RecordStatHolder = {
  /** Name of the aggregated value. */
  name?: string | null;
  /** Number of matching articles for the value. */
  count?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordStatHolderSchema: Schema<RecordStatHolder> = s.object<RecordStatHolder>(
  {
    name: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
