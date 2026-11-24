import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Webhook delivery status. Present on `COMPLETED` and `FAILED` tasks created with a `webhook.url`.
 */
export type Webhook1 = {
  /** The `webhook.url` you set when creating the task. */
  url: string;
  /** When your endpoint acknowledged the webhook with a `2xx`. Null until then. */
  deliveredAt: Date | null;
  /** Whether your endpoint has acknowledged the webhook with a `2xx`. */
  delivered: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhook1Properties: s.Shape<Webhook1> = {
  url: s.string(),
  deliveredAt: s.nullable(s.dateTime()),
  delivered: s.boolean(),
};

export const webhook1InternalSchema: Schema<Webhook1> = s.object<Webhook1>(webhook1Properties, {
  additionalProperties: s.json(),
});

export const webhook1Schema: Schema<Webhook1> = s.lazySchema(() =>
  s.object<Webhook1>(
    {
      ...webhook1Properties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
