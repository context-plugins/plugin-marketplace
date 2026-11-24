import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublishValueReceiptBody = {
  publishExpiresAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishValueReceiptBodySchema: Schema<PublishValueReceiptBody> =
  s.object<PublishValueReceiptBody>(
    {
      publishExpiresAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
