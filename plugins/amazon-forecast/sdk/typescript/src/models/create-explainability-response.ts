import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateExplainabilityResponse = {
  /** The Amazon Resource Name (ARN) of the Explainability. */
  explainabilityArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createExplainabilityResponseSchema: Schema<CreateExplainabilityResponse> =
  s.object<CreateExplainabilityResponse>(
    {
      explainabilityArn: s.optional(s.string()),
      _keysMap: {
        explainabilityArn: "ExplainabilityArn",
      },
    },
    { additionalProperties: s.json() },
  );
