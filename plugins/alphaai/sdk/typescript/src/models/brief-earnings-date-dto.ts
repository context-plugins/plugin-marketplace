import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BriefEarningsDateDto = {
  ticker: string;
  reportDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const briefEarningsDateDtoSchema: Schema<BriefEarningsDateDto> = s.object<BriefEarningsDateDto>(
  {
    ticker: s.string(),
    reportDate: s.dateOnly(),
    _keysMap: {
      reportDate: "report_date",
    },
  },
  { additionalProperties: s.json() },
);
