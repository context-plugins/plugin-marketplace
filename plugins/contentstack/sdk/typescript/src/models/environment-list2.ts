import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environment2Schema, type Environment2 } from "./environment2.js";

/** A list of deployment environments. */
export type EnvironmentList2 = {
  /** Array of environment objects. */
  data?: Environment2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentList2Schema: Schema<EnvironmentList2> = s.object<EnvironmentList2>(
  {
    data: s.optional(s.array(s.lazy(() => environment2Schema))),
  },
  { additionalProperties: s.json() },
);
