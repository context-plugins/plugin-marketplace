import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentiment1Schema, type Sentiment1 } from "./unions/sentiment1.js";

export type BriefSignalDto = {
  ticker: string;
  sentiment?: Sentiment1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const briefSignalDtoSchema: Schema<BriefSignalDto> = s.object<BriefSignalDto>(
  {
    ticker: s.string(),
    sentiment: s.optional(s.lazy(() => sentiment1Schema)),
  },
  { additionalProperties: s.json() },
);
