import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RedirectMessage = {
  /** Message type for the redirecting the client to another bot flow. @default "redirect" */
  type?: "redirect";
  /**
   * Client-generated sequence number of the message in a session. Increase this number for each
   * subsequent message.
   */
  sequenceId: number;
  /** Dialog ID to redirect to. */
  dialogId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redirectMessageSchema: Schema<RedirectMessage> = s.object<RedirectMessage>(
  {
    type: s.defaulted(s.literal("redirect"), "redirect"),
    sequenceId: s.int(),
    dialogId: s.string(),
  },
  { additionalProperties: s.json() },
);
