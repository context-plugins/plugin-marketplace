import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { normalizedEntitySchema, type NormalizedEntity } from "./normalized-entity.js";
import { normalizedIntentSchema, type NormalizedIntent } from "./normalized-intent.js";
import { messageSchema, type Message } from "./unions/message.js";
import { variableSchema, type Variable } from "./unions/variable.js";

export type ResponseEnvelope = {
  /** Bot runtime session ID. */
  sessionId: string;
  /** Bot configuration version. */
  botVersion: string | null;
  /**
   * Sequence IDs of messages that the bot processed. Except for the initial request to start the
   * session, all requests require a `sequenceId`.
   */
  processedSequenceIds: number[];
  /** Messages from the bot. */
  messages: Message[];
  /**
   * Array of custom and context variables passed to the bot when initiating a session (see [What’s
   * a
   * Variable?](https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&type=5&_ga=2.50520745.1281711304.1657558186-1967832163.1652719780)).
   */
  variables?: Variable[] | null;
  /** Session metrics. */
  metrics?: Record<string, unknown>;
  /**
   * Array of the intents detected by the bot when processing the request. For a bot, "intent"
   * refers to the goal the customer (see [Use Intents to Understand Your
   * Customers](https://help.salesforce.com/s/articleView?id=sf.bots_service_train_bot.htm&type=5&_ga=2.5901875.1281711304.1657558186-1967832163.1652719780)).
   */
  intents?: NormalizedIntent[];
  /**
   * Array of all entities detected by the bot when processing this request. For a bot, "Entities"
   * refer to the modifiers the customer uses to describe their issue and intent is what they really
   * mean.
   */
  entities?: NormalizedEntity[];
  /** List of Einstein Bots API endpoints for HATEOS compliancy. */
  links: Links;
};

export const responseEnvelopeSchema: Schema<ResponseEnvelope> = s.object<ResponseEnvelope>({
  sessionId: s.string(),
  botVersion: s.nullable(s.string()),
  processedSequenceIds: s.array(s.int()),
  messages: s.array(s.lazy(() => messageSchema)),
  variables: s.optionalNullable(s.array(s.lazy(() => variableSchema))),
  metrics: s.optional(s.record(s.string(), s.unknown())),
  intents: s.optional(s.array(s.lazy(() => normalizedIntentSchema))),
  entities: s.optional(s.array(s.lazy(() => normalizedEntitySchema))),
  links: linksSchema,
  _keysMap: {
    links: "_links",
  },
});
