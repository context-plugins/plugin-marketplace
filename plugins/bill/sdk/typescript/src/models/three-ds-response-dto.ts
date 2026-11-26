import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { threeDsChallengeStatusSchema, type ThreeDsChallengeStatus } from "./three-ds-challenge-status.js";

/** Response dto for three ds response. */
export type ThreeDsResponseDto = {
  /** BILL-generated ID of the 3D Secure response */
  id?: string;
  status?: ThreeDsChallengeStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threeDsResponseDtoSchema: Schema<ThreeDsResponseDto> = s.object<ThreeDsResponseDto>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => threeDsChallengeStatusSchema)),
  },
  { additionalProperties: s.json() },
);
