import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type Channel = {
  id: string;
  name?: string | null;
  username?: string | null;
  address?: string | null;
  avatarUrl?: string | null;
  webhook?: Webhook | null;
  metadata?: Metadata | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelSchema: Schema<Channel> = s.object<Channel>(
  {
    id: s.string(),
    name: s.optionalNullable(s.string()),
    username: s.optionalNullable(s.string()),
    address: s.optionalNullable(s.string()),
    avatarUrl: s.optionalNullable(s.string()),
    webhook: s.optionalNullable(s.lazy(() => webhookSchema)),
    metadata: s.optionalNullable(s.lazy(() => metadataSchema)),
  },
  { additionalProperties: s.json() },
);
