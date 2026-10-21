import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditsUtilizationItemSchema = {
  /** Date of the aggregation window in ISO 8601 format. */
  date: Date;
  /** Number of credits consumed in the aggregation window. */
  credits: number;
};

export const creditsUtilizationItemSchemaSchema: Schema<CreditsUtilizationItemSchema> =
  s.object<CreditsUtilizationItemSchema>({
    date: s.dateTime(),
    credits: s.float64(),
  });
