import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LayerPatchInput = {
  /** Optional comment describing the update */
  comment?: string;
  /**
   * The environment key used for making environment specific updates. For example, updating the
   * reservation of an experiment
   */
  environmentKey?: string;
  instructions: Record<string, unknown>[];
};

export const layerPatchInputSchema: Schema<LayerPatchInput> = s.object<LayerPatchInput>({
  comment: s.optional(s.string()),
  environmentKey: s.optional(s.string()),
  instructions: s.array(s.record(s.string(), s.unknown())),
});
