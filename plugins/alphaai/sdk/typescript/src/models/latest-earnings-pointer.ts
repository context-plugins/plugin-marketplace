import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { verdictSchema, type Verdict } from "./verdict.js";

/** Pointer to a ticker's most recent earnings read (for the article link). */
export type LatestEarningsPointer = {
  /** Article uid; resolve the full read via /api/news/{uid}/. */
  uid: string;
  timePublished: Date;
  title: string;
  fiscalPeriod: string;
  verdict: Verdict;
  headline: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latestEarningsPointerSchema: Schema<LatestEarningsPointer> = s.object<LatestEarningsPointer>(
  {
    uid: s.string(),
    timePublished: s.dateTime(),
    title: s.string(),
    fiscalPeriod: s.string(),
    verdict: verdictSchema,
    headline: s.string(),
    _keysMap: {
      timePublished: "time_published",
      fiscalPeriod: "fiscal_period",
    },
  },
  { additionalProperties: s.json() },
);
