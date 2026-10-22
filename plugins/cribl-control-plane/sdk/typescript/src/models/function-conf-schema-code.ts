import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaCode = {
  /**
   * Caution: This Function will be evaluated in an unprotected context. This means that you will be
   * able to execute almost any JavaScript code.
   */
  code?: string;
  /** The maximum number of allowed iterations within this Function. Defaults to 5,000. */
  maxNumOfIterations?: number;
  /**
   * Rate at which this Function logs errors. For example, a value of 1 logs every error, a value of
   * 1000 (the default) logs every thousandth error, and so on.
   */
  activeLogSampleRate?: number;
  /**
   * Logs from this Function will be sent to a unique channel in the form
   * `func:code:${pipelineName}:${functionIndex}`. Disable to use the generic `func:code` log
   * channel instead.
   */
  useUniqueLogChannel?: boolean;
};

export const functionConfSchemaCodeSchema: Schema<FunctionConfSchemaCode> = s.object<FunctionConfSchemaCode>({
  code: s.optional(s.string()),
  maxNumOfIterations: s.optional(s.float64()),
  activeLogSampleRate: s.optional(s.float64()),
  useUniqueLogChannel: s.optional(s.boolean()),
});
