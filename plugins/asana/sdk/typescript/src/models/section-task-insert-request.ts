import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SectionTaskInsertRequest = {
  /** The task to add to this section. */
  task: string;
  /**
   * An existing task within this section before which the added task should be inserted. Cannot be
   * provided together with insert_after.
   */
  insertBefore?: string;
  /**
   * An existing task within this section after which the added task should be inserted. Cannot be
   * provided together with insert_before.
   */
  insertAfter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionTaskInsertRequestSchema: Schema<SectionTaskInsertRequest> =
  s.object<SectionTaskInsertRequest>(
    {
      task: s.string(),
      insertBefore: s.optional(s.string()),
      insertAfter: s.optional(s.string()),
      _keysMap: {
        insertBefore: "insert_before",
        insertAfter: "insert_after",
      },
    },
    { additionalProperties: s.json() },
  );
