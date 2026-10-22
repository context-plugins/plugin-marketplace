import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformChatCustomEntitySourceSchema,
  type PlatformChatCustomEntitySource,
} from "../platform-chat-custom-entity-source.js";
import {
  platformChatDocumentSourceSchema,
  type PlatformChatDocumentSource,
} from "../platform-chat-document-source.js";
import { platformChatFileSourceSchema, type PlatformChatFileSource } from "../platform-chat-file-source.js";
import {
  platformChatPersonSourceSchema,
  type PlatformChatPersonSource,
} from "../platform-chat-person-source.js";

/** Four-variant citation source union. */
export type PlatformChatCitationSource =
  | (PlatformChatDocumentSource & { type: "DOCUMENT" })
  | (PlatformChatPersonSource & { type: "PERSON" })
  | (PlatformChatFileSource & { type: "FILE" })
  | (PlatformChatCustomEntitySource & { type: "CUSTOM_ENTITY" });

export const platformChatCitationSourceSchema: Schema<PlatformChatCitationSource> =
  s.discriminatedUnion<PlatformChatCitationSource>("type", {
    DOCUMENT: platformChatDocumentSourceSchema,
    PERSON: platformChatPersonSourceSchema,
    FILE: platformChatFileSourceSchema,
    CUSTOM_ENTITY: platformChatCustomEntitySourceSchema,
  });
