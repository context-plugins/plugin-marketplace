import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentPurpose5Schema, type PaymentPurpose5 } from "./payment-purpose5.js";
import { validations2Schema, type Validations2 } from "./validations2.js";

/** International payments configuration response. */
export type IntlPmtsConfigurationResponseDto = {
  paymentPurpose?: PaymentPurpose5;
  validations?: Validations2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intlPmtsConfigurationResponseDtoSchema: Schema<IntlPmtsConfigurationResponseDto> =
  s.object<IntlPmtsConfigurationResponseDto>(
    {
      paymentPurpose: s.optional(s.lazy(() => paymentPurpose5Schema)),
      validations: s.optional(s.lazy(() => validations2Schema)),
    },
    { additionalProperties: s.json() },
  );
