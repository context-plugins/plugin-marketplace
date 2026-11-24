import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type Destination = {
  /**
   * `webhook:<id>` or `integration:<id>` — the value the retry endpoint accepts as destinationKey.
   */
  key: string;
  kind: Kind;
  /**
   * How to name this destination: the provider for an integration, and for a webhook the connector
   * that created it (“Zapier”, “n8n”) or its host plus a short fingerprint of the path. The full
   * URL is never returned here.
   */
  label: string;
  detail: string | null;
  delivered: number;
  pending: number;
  failed: number;
  nextRetryAt: number | null;
  lastDeliveredAt: number | null;
  failingSince: number | null;
  lastError: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>(
  {
    key: s.string(),
    kind: kindSchema,
    label: s.string(),
    detail: s.nullable(s.string()),
    delivered: s.int(),
    pending: s.int(),
    failed: s.int(),
    nextRetryAt: s.nullable(s.int()),
    lastDeliveredAt: s.nullable(s.int()),
    failingSince: s.nullable(s.int()),
    lastError: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
