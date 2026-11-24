import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Resolution, resolutionSchema } from "./resolution.js";

export type SendFaxRequest = {
  /** Destination fax number. */
  to: string;
  /** One of your active numbers. Printed in the fax header and sent as the station ID. */
  from: string;
  /**
   * The PDF or TIFF as a base64 data URL (`data:application/pdf;base64,...`) or bare base64. 20 MB,
   * 50 pages.
   */
  document: string;
  filename?: string;
  /** fine = 204×196, standard = 204×98. @default Resolution.Fine */
  resolution?: Resolution;
  /** Header text on every page (letters, digits, space, `. _ -`). Defaults to your number. */
  header?: string;
  /**
   * Receives `fax.completed` / `fax.failed`, signed per attempt with this key's secret
   * (X-Timestamp, X-Signature, X-Event-Source).
   */
  statusWebhookUrl?: string;
  /** Returned unchanged on the fax and in every webhook. */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sendFaxRequestProperties: s.Shape<SendFaxRequest> = {
  to: s.string(),
  from: s.string(),
  document: s.string(),
  filename: s.optional(s.string()),
  resolution: s.defaulted(resolutionSchema, Resolution.Fine),
  header: s.optional(s.string()),
  statusWebhookUrl: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
};

export const sendFaxRequestInternalSchema: Schema<SendFaxRequest> = s.object<SendFaxRequest>(
  sendFaxRequestProperties,
  { additionalProperties: s.json() },
);

export const sendFaxRequestSchema: Schema<SendFaxRequest> = s.lazySchema(() =>
  s.object<SendFaxRequest>(
    {
      ...sendFaxRequestProperties,
      to: s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$")),
      from: s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$")),
      filename: s.optional(s.string().check(s.maxLength(120))),
      header: s.optional(s.string().check(s.maxLength(20))),
      statusWebhookUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
