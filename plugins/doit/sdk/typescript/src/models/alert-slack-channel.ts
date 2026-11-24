import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/**
 * Eligible Slack destination returned by listAlertSlackChannels and echoed on alert responses. Name
 * and type are canonical display metadata resolved server-side; values supplied on a request are
 * ignored. Existing unavailable destinations may be retained or removed.
 */
export type AlertSlackChannel = {
  id: string;
  /** Connected workspace name returned by discovery. Required for a non-shared channel. */
  workspace?: string;
  /** @default false */
  shared?: boolean;
  customerId?: string;
  /** Display name, resolved server-side. */
  name?: string;
  /** Channel visibility, resolved server-side. */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const alertSlackChannelProperties: s.Shape<AlertSlackChannel> = {
  id: s.string(),
  workspace: s.optional(s.string()),
  shared: s.defaulted(s.boolean(), false),
  customerId: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
};

export const alertSlackChannelInternalSchema: Schema<AlertSlackChannel> = s.object<AlertSlackChannel>(
  alertSlackChannelProperties,
  { additionalProperties: s.json() },
);

export const alertSlackChannelSchema: Schema<AlertSlackChannel> = s.lazySchema(() =>
  s.object<AlertSlackChannel>(
    {
      ...alertSlackChannelProperties,
      id: s.string().check(s.minLength(1)),
      customerId: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
