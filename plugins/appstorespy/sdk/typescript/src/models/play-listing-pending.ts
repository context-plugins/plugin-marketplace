import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayListingPending = {
  /** The app package name */
  id: string;
  /** Country the listing was requested for */
  country: string;
  /** Language the listing was requested in */
  language: string;
  /** Always `pending` @default "pending" */
  status?: string;
  /** When the crawl was queued, UTC */
  requested: Date;
  /** What to do next */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playListingPendingSchema: Schema<PlayListingPending> = s.object<PlayListingPending>(
  {
    id: s.string(),
    country: s.string(),
    language: s.string(),
    status: s.defaulted(s.string(), "pending"),
    requested: s.dateTime(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
