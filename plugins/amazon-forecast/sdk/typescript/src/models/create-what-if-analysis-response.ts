import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateWhatIfAnalysisResponse = {
  /** The Amazon Resource Name (ARN) of the what-if analysis. */
  whatIfAnalysisArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWhatIfAnalysisResponseSchema: Schema<CreateWhatIfAnalysisResponse> =
  s.object<CreateWhatIfAnalysisResponse>(
    {
      whatIfAnalysisArn: s.optional(s.string()),
      _keysMap: {
        whatIfAnalysisArn: "WhatIfAnalysisArn",
      },
    },
    { additionalProperties: s.json() },
  );
