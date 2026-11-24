import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResellerHandshakeError = {
  /** Stable machine-readable error code for this item. */
  code: string;
  /** Human-readable explanation of the failure. */
  message: string;
};

export const resellerHandshakeErrorSchema: Schema<ResellerHandshakeError> = s.object<ResellerHandshakeError>({
  code: s.string(),
  message: s.string(),
});
