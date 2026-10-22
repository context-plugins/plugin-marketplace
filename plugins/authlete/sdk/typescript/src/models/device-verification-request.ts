import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceVerificationRequest = {
  /** A user code. */
  userCode: string;
};

export const deviceVerificationRequestSchema: Schema<DeviceVerificationRequest> =
  s.object<DeviceVerificationRequest>({
    userCode: s.string(),
  });
