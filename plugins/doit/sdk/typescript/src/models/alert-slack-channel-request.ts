import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Slack destination selected for an alert. Exactly one of the two shapes is valid: a shared channel
 * (`shared: true`, `workspace` omitted), or a workspace channel (`shared: false` or omitted,
 * `workspace` required). Any other combination is rejected with `validation_failed`. Identity is id
 * plus workspace/shared context. customerId defaults to the authenticated customer; an explicit
 * mismatch is rejected. Service accounts can add public/shared destinations; new private
 * destinations require a user credential with channel visibility.
 */
export type AlertSlackChannelRequest = {
  id: string;
  /** Connected workspace name returned by discovery. Required for a non-shared channel. */
  workspace?: string;
  /** @default false */
  shared?: boolean;
  customerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertSlackChannelRequestProperties: s.Shape<AlertSlackChannelRequest> = {
  id: s.string(),
  workspace: s.optional(s.string()),
  shared: s.defaulted(s.boolean(), false),
  customerId: s.optional(s.string()),
};

export const alertSlackChannelRequestInternalSchema: Schema<AlertSlackChannelRequest> =
  s.object<AlertSlackChannelRequest>(alertSlackChannelRequestProperties, { additionalProperties: s.json() });

export const alertSlackChannelRequestSchema: Schema<AlertSlackChannelRequest> = s.lazySchema(() =>
  s.object<AlertSlackChannelRequest>(
    {
      ...alertSlackChannelRequestProperties,
      id: s.string().check(s.minLength(1)),
      customerId: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
