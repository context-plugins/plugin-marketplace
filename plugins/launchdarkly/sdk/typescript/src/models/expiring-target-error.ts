import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExpiringTargetError = {
  /** The index of the PATCH instruction where the error occurred */
  instructionIndex: number;
  /** The error message related to a failed PATCH instruction */
  message: string;
};

export const expiringTargetErrorSchema: Schema<ExpiringTargetError> = s.object<ExpiringTargetError>({
  instructionIndex: s.int(),
  message: s.string(),
});
