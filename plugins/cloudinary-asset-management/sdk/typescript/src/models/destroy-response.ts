import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type DestroyResponse = {
  /** Result of the deletion operation. */
  result?: Result;
};

export const destroyResponseSchema: Schema<DestroyResponse> = s.object<DestroyResponse>({
  result: s.optional(s.lazy(() => resultSchema)),
});
