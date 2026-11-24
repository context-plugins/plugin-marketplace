import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteWhatIfAnalysisRequest = {
  /** The Amazon Resource Name (ARN) of the what-if analysis that you want to delete. */
  whatIfAnalysisArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteWhatIfAnalysisRequestSchema: Schema<DeleteWhatIfAnalysisRequest> =
  s.object<DeleteWhatIfAnalysisRequest>(
    {
      whatIfAnalysisArn: s.string(),
      _keysMap: {
        whatIfAnalysisArn: "WhatIfAnalysisArn",
      },
    },
    { additionalProperties: s.json() },
  );
