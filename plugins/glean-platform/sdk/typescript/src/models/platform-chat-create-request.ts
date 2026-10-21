import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textSchema, type Text } from "./text.js";
import { inputSchema, type Input } from "./unions/input.js";

export type PlatformChatCreateRequest = {
  /**
   * Either a plain string (single user turn) or a chronological array of `USER`/`ASSISTANT`
   * messages. The final array message must be `USER`.
   */
  input: Input;
  /**
   * When true, the HTTP response is `text/event-stream`. When false or omitted, the HTTP response
   * is `application/json`.
   *
   * @default false
   */
  stream?: boolean;
  /**
   * When true (default), persist the interaction and return a `conversation_id`. When false, run
   * ephemerally with no persistence.
   *
   * @default true
   */
  store?: boolean;
  /**
   * Continue an existing stored conversation. Incompatible with message-array `input` and with
   * `store: false`.
   */
  conversationId?: string;
  /**
   * Optional configuration for the assistant's text response. When `format.type` is `JSON_SCHEMA`,
   * the response is constrained to the supplied JSON schema and returned in
   * `output[*].content[*].structured_output`. Structured output is not supported when `stream` is
   * true.
   */
  text?: Text;
};

export const platformChatCreateRequestSchema: Schema<PlatformChatCreateRequest> =
  s.object<PlatformChatCreateRequest>({
    input: inputSchema,
    stream: s.defaulted(s.boolean(), false),
    store: s.defaulted(s.boolean(), true),
    conversationId: s.optional(s.string()),
    text: s.optional(s.lazy(() => textSchema)),
    _keysMap: {
      conversationId: "conversation_id",
    },
  });
