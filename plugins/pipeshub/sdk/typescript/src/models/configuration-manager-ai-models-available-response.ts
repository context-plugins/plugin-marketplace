import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { model1Schema, type Model1 } from "./model1.js";

export type ConfigurationManagerAiModelsAvailableResponse = {
  /** @default "success" */
  status?: "success";
  /**
   * Human-readable summary. Two formats are possible:
   * - `"Found {n} {modelType} models"` — the `modelType` key exists in the stored config (returned
   *   even when `n` is 0, e.g. `"Found 0 ocr models"`).
   *
   * - `"No {modelType} models found"` — no AI config has been stored yet, or the `modelType` key is
   *   absent from the stored config entirely.
   */
  message: string;
  /**
   * Flat list of individual model entries. Each entry represents one model name from one provider
   * configuration.
   */
  models: Model1[];
};

export const configurationManagerAiModelsAvailableResponseSchema: Schema<ConfigurationManagerAiModelsAvailableResponse> =
  s.object<ConfigurationManagerAiModelsAvailableResponse>({
    status: s.defaulted(s.literal("success"), "success"),
    message: s.string(),
    models: s.array(s.lazy(() => model1Schema)),
  });
