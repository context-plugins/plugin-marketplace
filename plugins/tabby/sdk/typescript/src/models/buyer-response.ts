import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Customer information */
export type BuyerResponse = {
  /** Customer’s full name. */
  name: string | null;
  /** Customer’s email address. */
  email: string | null;
  /**
   * Customer’s phone number. This must be a valid mobile phone where the consumer can receive text
   * messages. The accepted phone masks are - `500000001`, `0500000001`, `+971500000001`,
   * `971500000001`.
   */
  phone: string | null;
  /** Customer's date of birth; format is YYYY-MM-DD. */
  dob?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buyerResponseProperties: s.Shape<BuyerResponse> = {
  name: s.nullable(s.string()),
  email: s.nullable(s.string()),
  phone: s.nullable(s.string()),
  dob: s.optionalNullable(s.dateOnly()),
};

export const buyerResponseInternalSchema: Schema<BuyerResponse> = s.object<BuyerResponse>(
  buyerResponseProperties,
  { additionalProperties: s.json() },
);

export const buyerResponseSchema: Schema<BuyerResponse> = s.lazySchema(() =>
  s.object<BuyerResponse>(
    {
      ...buyerResponseProperties,
      email: s.nullable(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
