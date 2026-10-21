import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteShortcutRequest = {
  /** The opaque id of the user generated content. */
  id: number;
};

export const deleteShortcutRequestSchema: Schema<DeleteShortcutRequest> = s.object<DeleteShortcutRequest>({
  id: s.int(),
});
