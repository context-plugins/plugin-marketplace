import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { verdict1Schema, type Verdict1 } from "./verdict1.js";

export type VsPriorGuidance = {
  metric?: string;
  priorGuidance?: string;
  actual?: string;
  verdict?: Verdict1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vsPriorGuidanceSchema: Schema<VsPriorGuidance> = s.object<VsPriorGuidance>(
  {
    metric: s.optional(s.string()),
    priorGuidance: s.optional(s.string()),
    actual: s.optional(s.string()),
    verdict: s.optional(s.lazy(() => verdict1Schema)),
    _keysMap: {
      priorGuidance: "prior_guidance",
    },
  },
  { additionalProperties: s.json() },
);
