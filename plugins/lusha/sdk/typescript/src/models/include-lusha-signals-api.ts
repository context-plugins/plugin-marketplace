import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IncludeLushaSignalsApi = {
  /**
   * Refines linkedinActivityIntent results by Bombora intent category. Only applies when
   * linkedinActivityIntent is requested (via signalTypes or allSignals). See GET
   * /v3/companies/signals/filters/intentCategories for valid values.
   */
  intentCategories?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const includeLushaSignalsApiSchema: Schema<IncludeLushaSignalsApi> = s.object<IncludeLushaSignalsApi>(
  {
    intentCategories: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
