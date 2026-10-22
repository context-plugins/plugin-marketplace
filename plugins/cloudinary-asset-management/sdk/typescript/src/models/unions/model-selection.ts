import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modelAutoSchema, type ModelAuto } from "../model-auto.js";
import { modelByFamilySchema, type ModelByFamily } from "../model-by-family.js";
import { modelByIdSchema, type ModelById } from "../model-by-id.js";

/**
 * Selects the model, in one of three mutually exclusive forms (omit to use the global default):
 *   * `ModelByFamily`: `family` (+ optional `tier`); the stable-over-time selector.
 *   * `ModelById`: an explicit `id`, pinning one exact model.
 *   * `ModelAuto`: `mode: auto`, letting the service choose the model for the request (+ optional
 *     `preference`).
 */
export type ModelSelection = ModelByFamily | ModelById | ModelAuto;

export const modelSelectionSchema: Schema<ModelSelection> = s.of<ModelSelection>(
  s.union([s.lazy(() => modelByFamilySchema), s.lazy(() => modelByIdSchema), s.lazy(() => modelAutoSchema)]),
);
