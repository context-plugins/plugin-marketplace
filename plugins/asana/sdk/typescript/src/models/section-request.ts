import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SectionRequest = {
  /** The text to be displayed as the section name. This cannot be an empty string. */
  name: string;
  /**
   * An existing section within this project before which the added section should be inserted.
   * Cannot be provided together with insert_after.
   */
  insertBefore?: string;
  /**
   * An existing section within this project after which the added section should be inserted.
   * Cannot be provided together with insert_before.
   */
  insertAfter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionRequestSchema: Schema<SectionRequest> = s.object<SectionRequest>(
  {
    name: s.string(),
    insertBefore: s.optional(s.string()),
    insertAfter: s.optional(s.string()),
    _keysMap: {
      insertBefore: "insert_before",
      insertAfter: "insert_after",
    },
  },
  { additionalProperties: s.json() },
);
