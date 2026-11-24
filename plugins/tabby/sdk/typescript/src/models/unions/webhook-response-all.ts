import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "../webhook.js";

export type WebhookResponseAll = Webhook | Record<string, unknown>;

export const webhookResponseAllInternalSchema: Schema<WebhookResponseAll> = s.of<WebhookResponseAll>(
  s.union([s.lazy(() => webhookInternalSchema), s.record(s.string(), s.unknown())]),
);

export const webhookResponseAllSchema: Schema<WebhookResponseAll> = s.lazySchema(() =>
  s.of<WebhookResponseAll>(s.union([s.lazy(() => webhookSchema), s.record(s.string(), s.unknown())])),
);
