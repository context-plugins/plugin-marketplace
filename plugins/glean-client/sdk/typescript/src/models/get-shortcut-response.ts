import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shortcutErrorSchema, type ShortcutError } from "./shortcut-error.js";
import { shortcutSchema, type Shortcut } from "./shortcut.js";

export type GetShortcutResponse = {
  shortcut?: Shortcut;
  error?: ShortcutError;
};

export const getShortcutResponseSchema: Schema<GetShortcutResponse> = s.object<GetShortcutResponse>({
  shortcut: s.optional(s.lazy(() => shortcutSchema)),
  error: s.optional(s.lazy(() => shortcutErrorSchema)),
});
