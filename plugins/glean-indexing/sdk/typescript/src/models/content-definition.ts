import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes text content or base64 encoded binary content */
export type ContentDefinition = {
  mimeType: string;
  /** text content. Only one of textContent or binary content can be specified */
  textContent?: string;
  /** base64 encoded binary content. Only one of textContent or binary content can be specified */
  binaryContent?: string;
};

export const contentDefinitionSchema: Schema<ContentDefinition> = s.object<ContentDefinition>({
  mimeType: s.string(),
  textContent: s.optional(s.string()),
  binaryContent: s.optional(s.string()),
});
