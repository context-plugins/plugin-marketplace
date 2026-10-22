import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformChatJsonSchemaFormatSchema,
  type PlatformChatJsonSchemaFormat,
} from "../platform-chat-json-schema-format.js";
import { platformChatTextFormatSchema, type PlatformChatTextFormat } from "../platform-chat-text-format.js";

/**
 * Output format for the assistant text. TEXT is unconstrained. JSON_SCHEMA constrains the response
 * to the supplied schema.
 */
export type Format = PlatformChatTextFormat | PlatformChatJsonSchemaFormat;

export const formatSchema: Schema<Format> = s.of<Format>(
  s.union([s.lazy(() => platformChatTextFormatSchema), s.lazy(() => platformChatJsonSchemaFormatSchema)]),
);
