import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExplainabilityInfo = {
  /** The Amazon Resource Name (ARN) of the Explainability. */
  explainabilityArn?: string;
  /**
   * The status of the Explainability. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const explainabilityInfoSchema: Schema<ExplainabilityInfo> = s.object<ExplainabilityInfo>(
  {
    explainabilityArn: s.optional(s.string()),
    status: s.optional(s.string()),
    _keysMap: {
      explainabilityArn: "ExplainabilityArn",
      status: "Status",
    },
  },
  { additionalProperties: s.json() },
);
