import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evidenceSchema, type Evidence } from "./evidence.js";
import { explanationSchema, type Explanation } from "./explanation.js";
import { factsSchema, type Facts } from "./facts.js";

export type AnomaliesV1ExplanationResponse = {
  /** Deterministic facts about the anomaly, not AI-generated. */
  facts: Facts;
  /** Customer-scoped identifiers the explanation was grounded in. */
  evidence: Evidence[];
  /** The AI-generated portion of the response. */
  explanation: Explanation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomaliesV1ExplanationResponseSchema: Schema<AnomaliesV1ExplanationResponse> =
  s.object<AnomaliesV1ExplanationResponse>(
    {
      facts: factsSchema,
      evidence: s.array(s.lazy(() => evidenceSchema)),
      explanation: explanationSchema,
    },
    { additionalProperties: s.json() },
  );
