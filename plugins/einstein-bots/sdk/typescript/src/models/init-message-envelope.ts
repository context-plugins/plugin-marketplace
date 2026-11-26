import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forceConfigSchema, type ForceConfig } from "./force-config.js";
import { referrerSchema, type Referrer } from "./referrer.js";
import { responseOptionsSchema, type ResponseOptions } from "./response-options.js";
import { textInitMessageSchema, type TextInitMessage } from "./text-init-message.js";
import { variableSchema, type Variable } from "./unions/variable.js";

export type InitMessageEnvelope = {
  /**
   * UUID in string format for the conversation. You can use this parameter to trace the
   * conversation in your bot's event logs.
   */
  externalSessionKey: string;
  message?: TextInitMessage;
  /** API configuration parameters. */
  forceConfig: ForceConfig;
  /** Configuration of additional information returned in the response payload. */
  responseOptions?: ResponseOptions;
  /** Client timezone where the customer starts the chat. */
  tz?: string | null;
  /**
   * Array of custom and context variables passed to the bot when initiating a session (see [What’s
   * a
   * Variable?](https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&type=5&_ga=2.50520745.1281711304.1657558186-1967832163.1652719780)).
   */
  variables?: Variable[] | null;
  /** Array of referrers of transferring the session to another bot. */
  referrers?: Referrer[] | null;
};

export const initMessageEnvelopeSchema: Schema<InitMessageEnvelope> = s.object<InitMessageEnvelope>({
  externalSessionKey: s.string(),
  message: s.optional(s.lazy(() => textInitMessageSchema)),
  forceConfig: forceConfigSchema,
  responseOptions: s.optional(s.lazy(() => responseOptionsSchema)),
  tz: s.optionalNullable(s.string()),
  variables: s.optionalNullable(s.array(s.lazy(() => variableSchema))),
  referrers: s.optionalNullable(s.array(s.lazy(() => referrerSchema))),
});
