import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Countries most frequently associated with the journalist's articles. */
export type NameCount = {
  /** Name of the aggregated value. */
  name?: string | null;
  /** Number of matching records for the value. */
  count?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nameCountSchema: Schema<NameCount> = s.object<NameCount>(
  {
    name: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
