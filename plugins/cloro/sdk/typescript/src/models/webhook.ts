import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Webhook configuration for task completion notification. */
export type Webhook = {
  /** URL to receive the webhook POST request when the task completes. */
  url: string;
};

const webhookProperties: s.Shape<Webhook> = {
  url: s.string(),
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties);

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>({
    ...webhookProperties,
    url: s.string().check(s.url()),
  }),
);
