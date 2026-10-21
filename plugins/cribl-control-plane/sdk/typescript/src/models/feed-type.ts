import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Proofpoint on Demand feed to ingest. */
export const FeedType = {
  Message: "message",
  Maillog: "maillog",
  Audit: "audit",
} as const;
export type FeedType = (typeof FeedType)[keyof typeof FeedType] | (string & {});

export const feedTypeSchema: EnumSchema<FeedType> = s.enumOf<FeedType>(FeedType);
