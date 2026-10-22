import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reasoning can be turned on or off. */
export type ReasoningToggle = {
  /** @default "toggle" */
  type?: "toggle";
};

export const reasoningToggleSchema: Schema<ReasoningToggle> = s.object<ReasoningToggle>({
  type: s.defaulted(s.literal("toggle"), "toggle"),
});
