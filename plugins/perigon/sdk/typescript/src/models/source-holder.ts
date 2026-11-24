import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceLocationSchema, type SourceLocation } from "./source-location.js";

/** Publisher information for the selected story image. */
export type SourceHolder = {
  /** Publisher domain. */
  domain?: string | null;
  /** Whether the publisher uses a paywall, when known. */
  paywall?: boolean | null;
  location?: SourceLocation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceHolderSchema: Schema<SourceHolder> = s.object<SourceHolder>(
  {
    domain: s.optionalNullable(s.string()),
    paywall: s.optionalNullable(s.boolean()),
    location: s.optional(s.lazy(() => sourceLocationSchema)),
  },
  { additionalProperties: s.json() },
);
