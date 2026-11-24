import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnprocessedStatistics = {
  /** The name of the sampling rule. */
  ruleName?: string;
  /** The error code. */
  errorCode?: string;
  /** The error message. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unprocessedStatisticsSchema: Schema<UnprocessedStatistics> = s.object<UnprocessedStatistics>(
  {
    ruleName: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      ruleName: "RuleName",
      errorCode: "ErrorCode",
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);
