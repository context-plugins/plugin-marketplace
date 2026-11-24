import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteExplainabilityRequest = {
  /** The Amazon Resource Name (ARN) of the Explainability resource to delete. */
  explainabilityArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteExplainabilityRequestSchema: Schema<DeleteExplainabilityRequest> =
  s.object<DeleteExplainabilityRequest>(
    {
      explainabilityArn: s.string(),
      _keysMap: {
        explainabilityArn: "ExplainabilityArn",
      },
    },
    { additionalProperties: s.json() },
  );
