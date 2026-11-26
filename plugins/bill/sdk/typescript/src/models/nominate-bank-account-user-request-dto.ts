import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Nominate a bank account user */
export type NominateBankAccountUserRequestDto = {
  /** BILL-generated ID of the user. The value begins with `006`. */
  userId: string;
  /**
   * BILL-generated ID of the bank account. The value begins with `bac`.
   *
   * **Note**: The bank account `status` must be set as `VERIFIED`.
   */
  bankAccountId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const nominateBankAccountUserRequestDtoProperties: s.Shape<NominateBankAccountUserRequestDto> = {
  userId: s.string(),
  bankAccountId: s.string(),
};

export const nominateBankAccountUserRequestDtoInternalSchema: Schema<NominateBankAccountUserRequestDto> =
  s.object<NominateBankAccountUserRequestDto>(nominateBankAccountUserRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const nominateBankAccountUserRequestDtoSchema: Schema<NominateBankAccountUserRequestDto> =
  s.lazySchema(() =>
    s.object<NominateBankAccountUserRequestDto>(
      {
        ...nominateBankAccountUserRequestDtoProperties,
        userId: s.string().check(s.minLength(1)),
        bankAccountId: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
