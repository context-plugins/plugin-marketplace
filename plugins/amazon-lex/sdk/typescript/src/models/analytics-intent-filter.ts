import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name2Schema, type Name2 } from "./name2.js";
import { operator1Schema, type Operator1 } from "./operator1.js";

export type AnalyticsIntentFilter = {
  /**
   * The category by which to filter the intents. The descriptions for each option are as follows:
   * BotAlias – The name of the bot alias. BotVersion – The version of the bot. LocaleId – The
   * locale of the bot. Modality – The modality of the session with the bot (audio, DTMF, or text).
   * Channel – The channel that the bot is integrated with. SessionId – The identifier of the
   * session with the bot. OriginatingRequestId – The identifier of the first request in a session.
   * IntentName – The name of the intent. IntentEndState – The final state of the intent.
   */
  name: Name2;
  /**
   * The operation by which to filter the category. The following operations are possible: CO –
   * Contains EQ – Equals GT – Greater than LT – Less than The operators that each filter supports
   * are listed below: BotAlias – EQ. BotVersion – EQ. LocaleId – EQ. Modality – EQ. Channel – EQ.
   * SessionId – EQ. OriginatingRequestId – EQ. IntentName – EQ, CO. IntentEndState – EQ, CO.
   */
  operator: Operator1;
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

export const analyticsIntentFilterSchema: Schema<AnalyticsIntentFilter> = s.object<AnalyticsIntentFilter>(
  {
    name: name2Schema,
    operator: operator1Schema,
    values: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
