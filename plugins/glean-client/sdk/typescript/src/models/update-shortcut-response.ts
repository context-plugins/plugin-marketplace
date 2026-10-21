import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shortcutErrorSchema, type ShortcutError } from "./shortcut-error.js";
import { shortcutSchema, type Shortcut } from "./shortcut.js";

export type UpdateShortcutResponse = {
  shortcut?: Shortcut;
  error?: ShortcutError;
};

export const updateShortcutResponseSchema: Schema<UpdateShortcutResponse> = s.object<UpdateShortcutResponse>({
  shortcut: s.optional(s.lazy(() => shortcutSchema)),
  error: s.optional(s.lazy(() => shortcutErrorSchema)),
});
