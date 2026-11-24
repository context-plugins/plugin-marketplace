import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceClassSchema, type ResourceClass } from "./resource-class.js";

export type RunnerResourceClassResponse = {
  /** List of resource classes */
  items?: ResourceClass[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runnerResourceClassResponseSchema: Schema<RunnerResourceClassResponse> =
  s.object<RunnerResourceClassResponse>(
    {
      items: s.optional(s.array(s.lazy(() => resourceClassSchema))),
    },
    { additionalProperties: s.json() },
  );
