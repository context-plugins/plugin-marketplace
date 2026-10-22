import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditGrantTypeSchema, type CreditGrantType } from "./credit-grant-type.js";

export type CreditGrantSchema = {
  /** Date the grant was issued, in ISO 8601 format. */
  date: Date;
  /** Number of credits acquired by the grant. */
  creditsAcquired: number;
  /** Type of the credit grant. */
  type: CreditGrantType;
};

export const creditGrantSchemaSchema: Schema<CreditGrantSchema> = s.object<CreditGrantSchema>({
  date: s.dateTime(),
  creditsAcquired: s.float64(),
  type: creditGrantTypeSchema,
});
