import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error response when there are insufficient credits */
export type InsufficientCreditsError = {
  /** @default "Insufficient credits" */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insufficientCreditsErrorSchema: Schema<InsufficientCreditsError> =
  s.object<InsufficientCreditsError>(
    {
      detail: s.defaulted(s.string(), "Insufficient credits"),
    },
    { additionalProperties: s.json() },
  );
