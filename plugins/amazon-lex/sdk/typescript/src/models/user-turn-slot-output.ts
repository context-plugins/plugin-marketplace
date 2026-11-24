import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserTurnSlotOutput = {
  /** The value output by the slot recognition. */
  value?: string;
  /** Values that are output by the slot recognition. */
  values?: UserTurnSlotOutput[];
  /** A list of items mapping the name of the subslots to information about those subslots. */
  subSlots?: Record<string, UserTurnSlotOutput>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTurnSlotOutputSchema: Schema<UserTurnSlotOutput> = s.object<UserTurnSlotOutput>(
  {
    value: s.optional(s.string()),
    values: s.optional(s.array(s.lazy(() => userTurnSlotOutputSchema))),
    subSlots: s.optional(
      s.record(
        s.string(),
        s.lazy(() => userTurnSlotOutputSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
