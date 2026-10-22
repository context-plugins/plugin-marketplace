import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Preference, preferenceSchema } from "./preference.js";

/**
 * Let the service choose the model for this request. The response reports the resolved model in
 * `data.assets[].model`, as for the other forms; on `image_to_image` it is always an edit model.
 */
export type ModelAuto = {
  /** The only valid value; selects automatic model selection. @default "auto" */
  mode?: "auto";
  /**
   * What the choice optimizes for:
   * * `balanced` (default): quality and cost weighted equally.
   * * `quality`: quality only; cost isn't weighed.
   * * `economy`: cost first, quality second.
   * * `balanced_fast`, `quality_fast`, `economy_fast`: as above, but also favor faster generation,
   *   and never pick a model that typically takes longer than 30 seconds.
   *
   * @default Preference.Balanced
   */
  preference?: Preference;
};

export const modelAutoSchema: Schema<ModelAuto> = s.object<ModelAuto>({
  mode: s.defaulted(s.literal("auto"), "auto"),
  preference: s.defaulted(preferenceSchema, Preference.Balanced),
});
