import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StandardResponse = {
  /** Status of the operation */
  status: string;
  /** Human-readable status message */
  message: string;
};

export const standardResponseSchema: Schema<StandardResponse> = s.object<StandardResponse>({
  status: s.string(),
  message: s.string(),
});
