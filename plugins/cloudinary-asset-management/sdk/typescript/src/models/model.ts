import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifies the model that produced a generation result. */
export type Model = {
  /**
   * The family this model belongs to. `none` when the model is not part of any family.
   *
   * A family holds exactly two tiers (`standard` and `premium`), so the family/tier taxonomy names
   * only part of the roster. The remaining models are selected by `id` alone and are not part of
   * any family, which is reported as `none` rather than as a family the model does not belong to.
   * This describes the model, not how it was selected: a model that belongs to a family reports it
   * whether it was chosen by `family` and `tier` or pinned by `id`.
   *
   * Not an enum: new families are added over time, so treat any value as possible.
   */
  family: string;
  /**
   * The quality tier this model holds within its family. `none` when the model is not part of any
   * family. See `family`.
   */
  tier: string;
  /**
   * The exact model identifier used for generation. Always a concrete model, and the reliable field
   * to key on: unlike `family` and `tier`, it is never `none`.
   */
  id: string;
};

export const modelSchema: Schema<Model> = s.object<Model>({
  family: s.string(),
  tier: s.string(),
  id: s.string(),
});
