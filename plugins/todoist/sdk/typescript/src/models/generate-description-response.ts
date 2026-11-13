import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GenerateDescriptionResponse = {
  /** AI-generated template description. */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generateDescriptionResponseSchema: Schema<GenerateDescriptionResponse> =
  s.object<GenerateDescriptionResponse>(
    {
      description: s.string(),
    },
    { additionalProperties: s.json() },
  );
