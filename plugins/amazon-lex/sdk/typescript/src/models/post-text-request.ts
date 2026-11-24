import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeLexActiveContextSchema, type RuntimeLexActiveContext } from "./runtime-lex-active-context.js";

export type PostTextRequest = {
  /** The name of the Amazon Lex bot. */
  botName: string;
  /** The alias of the Amazon Lex bot. */
  botAlias: string;
  /**
   * The ID of the client application user. Amazon Lex uses this to identify a user's conversation
   * with your bot. At runtime, each request must contain the userID field. To decide the user ID to
   * use for your application, consider the following factors. The userID field must not contain any
   * personally identifiable information of the user, for example, name, personal identification
   * numbers, or other end user personal information. If you want a user to start a conversation on
   * one device and continue on another device, use a user-specific identifier. If you want the same
   * user to be able to have two ind
   */
  userId: string;
  /**
   * Application-specific information passed between Amazon Lex and a client application. For more
   * information, see Setting Session Attributes.
   */
  sessionAttributes?: Record<string, string>;
  /**
   * Request-specific information passed between Amazon Lex and a client application. The namespace
   * x-amz-lex: is reserved for special attributes. Don't create any request attributes with the
   * prefix x-amz-lex:. For more information, see Setting Request Attributes.
   */
  requestAttributes?: Record<string, string>;
  /** The text that the user entered (Amazon Lex interprets this text). */
  inputText: string;
  /**
   * A list of contexts active for the request. A context can be activated when a previous intent is
   * fulfilled, or by including the context in the request, If you don't specify a list of contexts,
   * Amazon Lex will use the current list of contexts for the session. If you specify an empty list,
   * all contexts for the session are cleared.
   */
  activeContexts?: RuntimeLexActiveContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postTextRequestSchema: Schema<PostTextRequest> = s.object<PostTextRequest>(
  {
    botName: s.string(),
    botAlias: s.string(),
    userId: s.string(),
    sessionAttributes: s.optional(s.record(s.string(), s.string())),
    requestAttributes: s.optional(s.record(s.string(), s.string())),
    inputText: s.string(),
    activeContexts: s.optional(s.array(s.lazy(() => runtimeLexActiveContextSchema))),
  },
  { additionalProperties: s.json() },
);
