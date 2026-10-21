import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionInput = {
  /**
   * An array of instructions for the stage. Each object in the array uses the semantic patch format
   * for updating a feature flag.
   */
  instructions?: Record<string, unknown>;
};

export const actionInputSchema: Schema<ActionInput> = s.object<ActionInput>({
  instructions: s.optional(s.record(s.string(), s.unknown())),
});
