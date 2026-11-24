import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error response when there are insufficient credits */
export type InsufficientCreditsErrorError = {
  /** @default "Insufficient credits" */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insufficientCreditsErrorErrorSchema: Schema<InsufficientCreditsErrorError> =
  s.object<InsufficientCreditsErrorError>(
    {
      detail: s.defaulted(s.string(), "Insufficient credits"),
    },
    { additionalProperties: s.json() },
  );
