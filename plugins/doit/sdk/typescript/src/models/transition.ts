import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transition = {
  /** Key of the node this transition points at. */
  target: string;
  label?: string | null;
  pathId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transitionSchema: Schema<Transition> = s.object<Transition>(
  {
    target: s.string(),
    label: s.optionalNullable(s.string()),
    pathId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
