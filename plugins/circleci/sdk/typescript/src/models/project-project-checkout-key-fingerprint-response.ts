import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectProjectCheckoutKeyFingerprintResponse = {
  /** Confirmation message */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectProjectCheckoutKeyFingerprintResponseSchema: Schema<ProjectProjectCheckoutKeyFingerprintResponse> =
  s.object<ProjectProjectCheckoutKeyFingerprintResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
