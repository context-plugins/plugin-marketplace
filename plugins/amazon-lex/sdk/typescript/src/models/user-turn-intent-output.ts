import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userTurnSlotOutputSchema, type UserTurnSlotOutput } from "./user-turn-slot-output.js";

export type UserTurnIntentOutput = {
  /** The name of the intent. */
  name: string;
  /** The slots associated with the intent. */
  slots?: Record<string, UserTurnSlotOutput>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTurnIntentOutputSchema: Schema<UserTurnIntentOutput> = s.object<UserTurnIntentOutput>(
  {
    name: s.string(),
    slots: s.optional(
      s.record(
        s.string(),
        s.lazy(() => userTurnSlotOutputSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
