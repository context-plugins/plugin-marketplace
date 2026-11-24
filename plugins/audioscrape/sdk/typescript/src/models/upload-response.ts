import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UploadResponse = {
  /**
   * Set when the bytes matched a recording already in the workspace: nothing was stored or
   * transcribed, no minutes were used, and `item_id` is the existing recording.
   */
  duplicateOf?: number | null;
  /**
   * ID of the newly-created item. Fetch full metadata at `GET /api/items/{id}`. When `duplicate_of`
   * is set, this is that existing item.
   */
  itemId: number;
  /** Human-readable status message (e.g. `"queued for transcription"`). */
  message: string;
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const uploadResponseSchema: Schema<UploadResponse> = s.object<UploadResponse>(
  {
    duplicateOf: s.optionalNullable(s.int()),
    itemId: s.int(),
    message: s.string(),
    success: s.boolean(),
    _keysMap: {
      duplicateOf: "duplicate_of",
      itemId: "item_id",
    },
  },
  { additionalProperties: s.json() },
);
