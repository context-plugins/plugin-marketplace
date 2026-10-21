import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorType2Schema, type ErrorType2 } from "./error-type2.js";

export type ShortcutError = {
  errorType?: ErrorType2;
};

export const shortcutErrorSchema: Schema<ShortcutError> = s.object<ShortcutError>({
  errorType: s.optional(s.lazy(() => errorType2Schema)),
});
