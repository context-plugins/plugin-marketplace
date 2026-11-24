import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The AI-generated portion of the response. */
export type Explanation = {
  /** Concise, likely-cause explanation of the anomaly. */
  text: string;
  /** Identifies the system that generated the explanation. */
  generatedBy: string;
  /** Always true; present so consumers can identify AI-generated content explicitly. */
  aiGenerated: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const explanationSchema: Schema<Explanation> = s.object<Explanation>(
  {
    text: s.string(),
    generatedBy: s.string(),
    aiGenerated: s.boolean(),
  },
  { additionalProperties: s.json() },
);
