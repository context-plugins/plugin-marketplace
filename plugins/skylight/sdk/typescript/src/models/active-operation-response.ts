import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveOperationResponse = {
  /** Status of the operation */
  status: string;
  /** Human-readable status message */
  message: string;
  /** State of the instance (running, pending, hibernated, terminated) */
  state: string;
  /** URL to livestream the instance */
  livestreamUrl: string;
};

export const activeOperationResponseSchema: Schema<ActiveOperationResponse> =
  s.object<ActiveOperationResponse>({
    status: s.string(),
    message: s.string(),
    state: s.string(),
    livestreamUrl: s.string(),
    _keysMap: {
      livestreamUrl: "livestream_url",
    },
  });
