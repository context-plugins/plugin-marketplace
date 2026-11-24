import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EvaluationParameters = {
  /**
   * The number of times to split the input data. The default is 1. Valid values are 1 through 5.
   */
  numberOfBacktestWindows?: number;
  /**
   * The point from the end of the dataset where you want to split the data for model training and
   * testing (evaluation). Specify the value as the number of data points. The default is the value
   * of the forecast horizon. BackTestWindowOffset can be used to mimic a past virtual forecast
   * start date. This value must be greater than or equal to the forecast horizon and less than half
   * of the TARGET_TIME_SERIES dataset length. ForecastHorizon BackTestWindowOffset
   */
  backTestWindowOffset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evaluationParametersSchema: Schema<EvaluationParameters> = s.object<EvaluationParameters>(
  {
    numberOfBacktestWindows: s.optional(s.int()),
    backTestWindowOffset: s.optional(s.int()),
    _keysMap: {
      numberOfBacktestWindows: "NumberOfBacktestWindows",
      backTestWindowOffset: "BackTestWindowOffset",
    },
  },
  { additionalProperties: s.json() },
);
