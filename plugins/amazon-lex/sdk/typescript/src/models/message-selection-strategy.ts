import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates how a message is selected from a message group among retries. */
export const MessageSelectionStrategy = {
  Random: "Random",
  Ordered: "Ordered",
} as const;
export type MessageSelectionStrategy =
  | (typeof MessageSelectionStrategy)[keyof typeof MessageSelectionStrategy]
  | (string & {});

export const messageSelectionStrategySchema: EnumSchema<MessageSelectionStrategy> =
  s.enumOf<MessageSelectionStrategy>(MessageSelectionStrategy);
