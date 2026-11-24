import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeContextSchema, type ActiveContext } from "./active-context.js";
import { runtimeHintsSchema, type RuntimeHints } from "./runtime-hints.js";

export type InputSessionStateSpecification = {
  /** Session attributes for the session state. */
  sessionAttributes?: Record<string, string>;
  /** Active contexts for the session state. */
  activeContexts?: ActiveContext[];
  runtimeHints?: RuntimeHints;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputSessionStateSpecificationSchema: Schema<InputSessionStateSpecification> =
  s.object<InputSessionStateSpecification>(
    {
      sessionAttributes: s.optional(s.record(s.string(), s.string())),
      activeContexts: s.optional(s.array(s.lazy(() => activeContextSchema))),
      runtimeHints: s.optional(s.lazy(() => runtimeHintsSchema)),
    },
    { additionalProperties: s.json() },
  );
