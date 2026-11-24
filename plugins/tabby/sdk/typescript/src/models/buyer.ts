import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Customer information */
export type Buyer = {
  /** Customer’s full name. */
  name: string;
  /** Customer’s email address. */
  email: string;
  /**
   * Customer’s phone number. This must be a valid mobile phone where the consumer can receive text
   * messages. The accepted phone masks are - `500000001`, `0500000001`, `+971500000001`,
   * `971500000001`.
   */
  phone: string;
  /** Customer's date of birth; format is YYYY-MM-DD. */
  dob?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buyerProperties: s.Shape<Buyer> = {
  name: s.string(),
  email: s.string(),
  phone: s.string(),
  dob: s.optional(s.dateOnly()),
};

export const buyerInternalSchema: Schema<Buyer> = s.object<Buyer>(buyerProperties, {
  additionalProperties: s.json(),
});

export const buyerSchema: Schema<Buyer> = s.lazySchema(() =>
  s.object<Buyer>(
    {
      ...buyerProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
