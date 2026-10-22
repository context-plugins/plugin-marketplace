import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the response body of the /rotatetoken API call */
export type RotateTokenResponse = {
  /** New raw secret */
  rawSecret?: string;
  /**
   * Unix timestamp in seconds when the new secret value is assigned to the token. The token needs
   * to be rotated before `rotationPeriodMinutes` past the createdAt timestamp otherwise it would be
   * rendered unusable.
   */
  createdAt?: number;
  /**
   * Refers to the time period in minutes before which this token needs to be rotated. It is
   * required to rotate the token within the specified `rotationPeriodMinutes` after each
   * `/rotatetoken` call, otherwise the tokens would expire. Note that the token would still expire
   * at `expiresAt` timestamp provided during token creation even if the token is being regularly
   * rotated. `rotationPeriodMinutes` property is inherited from the parent token being rotated
   */
  rotationPeriodMinutes?: number;
};

export const rotateTokenResponseSchema: Schema<RotateTokenResponse> = s.object<RotateTokenResponse>({
  rawSecret: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  rotationPeriodMinutes: s.optional(s.int()),
});
