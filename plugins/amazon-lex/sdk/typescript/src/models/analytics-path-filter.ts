import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name12Schema, type Name12 } from "./name12.js";
import { operator3Schema, type Operator3 } from "./operator3.js";

export type AnalyticsPathFilter = {
  /**
   * The category by which to filter the intent paths. The descriptions for each option are as
   * follows: BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId –
   * The locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or
   * text). Channel – The channel that the bot is integrated with.
   */
  name: Name12;
  /**
   * The operation by which to filter the category. The following operations are possible: CO –
   * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports
   * are listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
   */
  operator: Operator3;
  /**
   * An array containing the values of the category by which to apply the operator to filter the
   * results. You can provide multiple values if the operator is EQ or CO. If you provide multiple
   * values, you filter for results that equal/contain any of the values. For example, if the name,
   * operator, and values fields are Modality, EQ, and [Speech, Text], the operation filters for
   * results where the modality was either Speech or Text.
   */
  values: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsPathFilterSchema: Schema<AnalyticsPathFilter> = s.object<AnalyticsPathFilter>(
  {
    name: name12Schema,
    operator: operator3Schema,
    values: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
