import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatDocumentSource = {
  /** @default "DOCUMENT" */
  type?: "DOCUMENT";
  documentId?: string;
  url?: string;
  title?: string;
  datasource?: string;
};

export const platformChatDocumentSourceSchema: Schema<PlatformChatDocumentSource> =
  s.object<PlatformChatDocumentSource>({
    type: s.defaulted(s.literal("DOCUMENT"), "DOCUMENT"),
    documentId: s.optional(s.string()),
    url: s.optional(s.string()),
    title: s.optional(s.string()),
    datasource: s.optional(s.string()),
    _keysMap: {
      documentId: "document_id",
    },
  });
