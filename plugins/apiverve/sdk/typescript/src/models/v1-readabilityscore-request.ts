import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ReadabilityscoreRequest = {
  /** The text to calculate the readability score of */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ReadabilityscoreRequestSchema: Schema<V1ReadabilityscoreRequest> =
  s.object<V1ReadabilityscoreRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
