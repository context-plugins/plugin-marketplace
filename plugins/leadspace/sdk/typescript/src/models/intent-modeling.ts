import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelLevelSchema, type ModelLevel } from "./model-level.js";

export type IntentModeling = {
  model?: string;
  modelLevel?: ModelLevel[];
  /** Either LS Intent or Bombora */
  source?: string;
  cadence?: string;
  newHighIntent?: string;
  industries?: string[];
  topMetros?: string[];
  domainOrigins?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentModelingSchema: Schema<IntentModeling> = s.object<IntentModeling>(
  {
    model: s.optional(s.string()),
    modelLevel: s.optional(s.array(s.lazy(() => modelLevelSchema))),
    source: s.optional(s.string()),
    cadence: s.optional(s.string()),
    newHighIntent: s.optional(s.string()),
    industries: s.optional(s.array(s.string())),
    topMetros: s.optional(s.array(s.string())),
    domainOrigins: s.optional(s.array(s.string())),
    _keysMap: {
      modelLevel: "model_level",
      newHighIntent: "new_high_intent",
      topMetros: "top_metros",
      domainOrigins: "domain_origins",
    },
  },
  { additionalProperties: s.json() },
);
