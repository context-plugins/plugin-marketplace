import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Finding = {
  kind: string;
  label: string;
  start: number;
  end: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findingSchema: Schema<Finding> = s.object<Finding>(
  {
    kind: s.string(),
    label: s.string(),
    start: s.float64(),
    end: s.float64(),
  },
  { additionalProperties: s.json() },
);
