import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** 3ds challenge transformed payload. */
export type ThreeDsChallengePayloadV1 = {
  merchantName?: string;
  merchantCategoryCode?: string;
  acsTransactionId?: string;
  userUuid?: string;
  occurredTime?: Date;
  amount?: number;
  cardUuid?: string;
  companyUuid?: string;
  currencyCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threeDsChallengePayloadV1Schema: Schema<ThreeDsChallengePayloadV1> =
  s.object<ThreeDsChallengePayloadV1>(
    {
      merchantName: s.optional(s.string()),
      merchantCategoryCode: s.optional(s.string()),
      acsTransactionId: s.optional(s.string()),
      userUuid: s.optional(s.string()),
      occurredTime: s.optional(s.dateTime()),
      amount: s.optional(s.float64()),
      cardUuid: s.optional(s.string()),
      companyUuid: s.optional(s.string()),
      currencyCode: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
