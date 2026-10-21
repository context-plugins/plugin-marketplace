import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type RestoreResponse = {
  /** The error message if restore failed for a specific asset. */
  error?: Error1;
};

export const restoreResponseSchema: Schema<RestoreResponse> = s.object<RestoreResponse>({
  error: s.optional(s.lazy(() => error1Schema)),
});
