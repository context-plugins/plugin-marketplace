import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optInSchema, type OptIn } from "./opt-in.js";
import { signupChannelSchema, type SignupChannel } from "./signup-channel.js";
import { signupTraitsRequestSchema, type SignupTraitsRequest } from "./unions/signup-traits-request.js";

export type CreateSignupRequest = {
  /**
   * A signup's own fields, as collected by the form. They are written to the customer's warehouse
   * and never stored by Hightouch.
   */
  traits?: Record<string, SignupTraitsRequest>;
  /**
   * Force an opt-in style. Omit to let the topic and channel decide; a value they cannot honor is
   * refused rather than silently resolved.
   */
  optIn?: OptIn;
  /** Which form or landing page this signup came from. */
  source?: string;
  topicExternalIdentifier?: string;
  /**
   * The subscription topic being consented to, by id or external identifier. Omit both to record
   * consent for the channel itself.
   */
  topicId?: string;
  /** Delivery channels a signup can consent on. */
  channel: SignupChannel;
  /** Email address or E.164 phone number, matching `channel`. */
  handle: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSignupRequestSchema: Schema<CreateSignupRequest> = s.object<CreateSignupRequest>(
  {
    traits: s.optional(
      s.record(
        s.string(),
        s.lazy(() => signupTraitsRequestSchema),
      ),
    ),
    optIn: s.optional(s.lazy(() => optInSchema)),
    source: s.optional(s.string()),
    topicExternalIdentifier: s.optional(s.string()),
    topicId: s.optional(s.string()),
    channel: signupChannelSchema,
    handle: s.string(),
  },
  { additionalProperties: s.json() },
);
