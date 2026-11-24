import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ElicitSubSlot = {
  /** The name of the slot that should be elicited from the user. */
  name: string;
  subSlotToElicit?: ElicitSubSlot;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const elicitSubSlotSchema: Schema<ElicitSubSlot> = s.object<ElicitSubSlot>(
  {
    name: s.string(),
    subSlotToElicit: s.optional(s.lazy(() => elicitSubSlotSchema)),
  },
  { additionalProperties: s.json() },
);
