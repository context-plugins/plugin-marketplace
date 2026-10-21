import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chatCustomEntitySourceSchema, type ChatCustomEntitySource } from "../chat-custom-entity-source.js";
import { chatDocumentSourceSchema, type ChatDocumentSource } from "../chat-document-source.js";
import { chatFileSourceSchema, type ChatFileSource } from "../chat-file-source.js";
import { chatPersonSourceSchema, type ChatPersonSource } from "../chat-person-source.js";

/** Four-variant citation source union. */
export type ChatCitationSource =
  | (ChatDocumentSource & { type: "DOCUMENT" })
  | (ChatPersonSource & { type: "PERSON" })
  | (ChatFileSource & { type: "FILE" })
  | (ChatCustomEntitySource & { type: "CUSTOM_ENTITY" });

export const chatCitationSourceSchema: Schema<ChatCitationSource> = s.discriminatedUnion<ChatCitationSource>(
  "type",
  {
    DOCUMENT: chatDocumentSourceSchema,
    PERSON: chatPersonSourceSchema,
    FILE: chatFileSourceSchema,
    CUSTOM_ENTITY: chatCustomEntitySourceSchema,
  },
);
