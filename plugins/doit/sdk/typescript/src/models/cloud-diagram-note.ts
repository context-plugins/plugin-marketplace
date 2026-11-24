import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A text note placed on the diagram. */
export type CloudDiagramNote = {
  /** Note ID. */
  id: string;
  /** Note text content. */
  text?: string;
  /** Note background color. */
  color?: string;
  /** Note font size. */
  fontSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramNoteSchema: Schema<CloudDiagramNote> = s.object<CloudDiagramNote>(
  {
    id: s.string(),
    text: s.optional(s.string()),
    color: s.optional(s.string()),
    fontSize: s.optional(s.float64()),
    _keysMap: {
      id: "_id",
      fontSize: "font_size",
    },
  },
  { additionalProperties: s.json() },
);
