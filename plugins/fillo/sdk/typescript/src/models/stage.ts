import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Stage = {
  id: string;
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageSchema: Schema<Stage> = s.object<Stage>(
  {
    id: s.string(),
    label: s.string(),
  },
  { additionalProperties: s.json() },
);
