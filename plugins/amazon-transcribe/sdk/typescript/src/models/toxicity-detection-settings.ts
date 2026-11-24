import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { toxicityCategorySchema, type ToxicityCategory } from "./toxicity-category.js";

export type ToxicityDetectionSettings = {
  /**
   * If you include ToxicityDetection in your transcription request, you must also include
   * ToxicityCategories. The only accepted value for this parameter is ALL.
   */
  toxicityCategories: ToxicityCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const toxicityDetectionSettingsSchema: Schema<ToxicityDetectionSettings> =
  s.object<ToxicityDetectionSettings>(
    {
      toxicityCategories: s.array(s.lazy(() => toxicityCategorySchema)),
      _keysMap: {
        toxicityCategories: "ToxicityCategories",
      },
    },
    { additionalProperties: s.json() },
  );
