import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operatorSchema, type Operator } from "./operator.js";

export type AggregatedUtterancesFilter = {
  /** The name of the field to filter the utterance list. @default "Utterance" */
  name?: "Utterance";
  /** The value to use for filtering the list of bots. */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListAggregatedUtterances operation
   * should return only utterances that equal the specified value. Specify CO when the
   * ListAggregatedUtterances operation should return utterances that contain the specified value.
   */
  operator: Operator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aggregatedUtterancesFilterSchema: Schema<AggregatedUtterancesFilter> =
  s.object<AggregatedUtterancesFilter>(
    {
      name: s.defaulted(s.literal("Utterance"), "Utterance"),
      values: s.array(s.string()),
      operator: operatorSchema,
    },
    { additionalProperties: s.json() },
  );
