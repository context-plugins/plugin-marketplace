import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeContextSchema, type ActiveContext } from "./active-context.js";
import { userTurnIntentOutputSchema, type UserTurnIntentOutput } from "./user-turn-intent-output.js";

export type UserTurnOutputSpecification = {
  intent: UserTurnIntentOutput;
  /** The contexts that are active in the turn. */
  activeContexts?: ActiveContext[];
  /** The transcript that is output for the user turn by the test execution. */
  transcript?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTurnOutputSpecificationSchema: Schema<UserTurnOutputSpecification> =
  s.object<UserTurnOutputSpecification>(
    {
      intent: userTurnIntentOutputSchema,
      activeContexts: s.optional(s.array(s.lazy(() => activeContextSchema))),
      transcript: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
