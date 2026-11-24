import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summaries returned for the requested page. */
export type SignalSummaryDto = {
  /** AI-generated summary of the monitor's matching content. */
  text?: string | null;
  /** Date and time the summary was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the summary was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalSummaryDtoSchema: Schema<SignalSummaryDto> = s.object<SignalSummaryDto>(
  {
    text: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
