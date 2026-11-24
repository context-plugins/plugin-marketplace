import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TemplatesSignRequestsRequest = {
  subject?: string;
  message?: string | null;
  metadata?: Record<string, unknown> | null;
  expiryHours?: number;
  autoSend?: boolean;
  redirectUrl?: string;
  /** Required only if the template has no document of its own */
  documentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const templatesSignRequestsRequestProperties: s.Shape<TemplatesSignRequestsRequest> = {
  subject: s.optional(s.string()),
  message: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  expiryHours: s.optional(s.int()),
  autoSend: s.optional(s.boolean()),
  redirectUrl: s.optional(s.string()),
  documentId: s.optional(s.string()),
  _keysMap: {
    expiryHours: "expiry_hours",
    autoSend: "auto_send",
    redirectUrl: "redirect_url",
    documentId: "document_id",
  },
};

export const templatesSignRequestsRequestInternalSchema: Schema<TemplatesSignRequestsRequest> =
  s.object<TemplatesSignRequestsRequest>(templatesSignRequestsRequestProperties, {
    additionalProperties: s.json(),
  });

export const templatesSignRequestsRequestSchema: Schema<TemplatesSignRequestsRequest> = s.lazySchema(() =>
  s.object<TemplatesSignRequestsRequest>(
    {
      ...templatesSignRequestsRequestProperties,
      subject: s.optional(s.string().check(s.maxLength(255))),
      message: s.optionalNullable(s.string().check(s.maxLength(2000))),
      expiryHours: s.optional(s.int().check(s.gte(1), s.lte(720))),
      redirectUrl: s.optional(s.string().check(s.maxLength(2048), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
