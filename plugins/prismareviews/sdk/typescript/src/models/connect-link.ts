import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import { platformIdSchema, type PlatformId } from "./platform-id.js";

export type ConnectLink = {
  /** The link to send to the account owner. */
  url: string;
  /** The only platform the link connects, or `null` for any of the plan. */
  platform: PlatformId | null;
  /** Mode of the connections it creates: that of the key. */
  mode: Mode;
  /** When the link stops working (7 days after creation). */
  expiresAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const connectLinkProperties: s.Shape<ConnectLink> = {
  url: s.string(),
  platform: s.nullable(s.lazy(() => platformIdSchema)),
  mode: modeSchema,
  expiresAt: s.dateTime(),
  _keysMap: {
    expiresAt: "expires_at",
  },
};

export const connectLinkInternalSchema: Schema<ConnectLink> = s.object<ConnectLink>(connectLinkProperties, {
  additionalProperties: s.json(),
});

export const connectLinkSchema: Schema<ConnectLink> = s.lazySchema(() =>
  s.object<ConnectLink>(
    {
      ...connectLinkProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
