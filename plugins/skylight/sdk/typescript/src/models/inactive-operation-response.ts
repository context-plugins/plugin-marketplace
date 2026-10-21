import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InactiveOperationResponse = {
  /** Status of the operation */
  status: string;
  /** Human-readable status message */
  message: string;
  /** State of the instance (running, pending, hibernated, terminated) */
  state: string;
};

export const inactiveOperationResponseSchema: Schema<InactiveOperationResponse> =
  s.object<InactiveOperationResponse>({
    status: s.string(),
    message: s.string(),
    state: s.string(),
  });
