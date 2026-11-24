import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { v1ExcerptSettingsSchema, type V1ExcerptSettings } from "../v1-excerpt-settings.js";

/**
 * Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use
 * defaults.
 */
export type ExcerptSettings = V1ExcerptSettings;

export const excerptSettingsSchema: Schema<ExcerptSettings> = s.of<ExcerptSettings>(
  s.union([s.lazy(() => v1ExcerptSettingsSchema)]),
);
