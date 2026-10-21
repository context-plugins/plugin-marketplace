import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentOrError = {
  /** The text for error, reason. */
  error: string;
};

export const documentOrErrorSchema: Schema<DocumentOrError> = s.object<DocumentOrError>({
  error: s.string(),
});
