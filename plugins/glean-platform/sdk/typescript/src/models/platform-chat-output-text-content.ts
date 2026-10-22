import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatCitationAnnotationSchema,
  type PlatformChatCitationAnnotation,
} from "./platform-chat-citation-annotation.js";

export type PlatformChatOutputTextContent = {
  /** @default "OUTPUT_TEXT" */
  type?: "OUTPUT_TEXT";
  text: string;
  /**
   * Parsed and validated JSON object when structured output was requested. Present only when the
   * request included `text.format.type: JSON_SCHEMA`.
   */
  structuredOutput?: Record<string, unknown> | null;
  annotations?: PlatformChatCitationAnnotation[];
};

export const platformChatOutputTextContentSchema: Schema<PlatformChatOutputTextContent> =
  s.object<PlatformChatOutputTextContent>({
    type: s.defaulted(s.literal("OUTPUT_TEXT"), "OUTPUT_TEXT"),
    text: s.string(),
    structuredOutput: s.optionalNullable(s.record(s.string(), s.unknown())),
    annotations: s.optional(s.array(s.lazy(() => platformChatCitationAnnotationSchema))),
    _keysMap: {
      structuredOutput: "structured_output",
    },
  });
