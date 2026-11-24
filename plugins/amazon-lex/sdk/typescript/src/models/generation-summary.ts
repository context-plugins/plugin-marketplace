import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generationStatusSchema, type GenerationStatus } from "./generation-status.js";

export type GenerationSummary = {
  /** The unique identifier of the generation request. */
  generationId?: string;
  /** The status of the generation request. */
  generationStatus?: GenerationStatus;
  /** The date and time at which the generation request was made. */
  creationDateTime?: Date;
  /** The date and time at which the generation request was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generationSummarySchema: Schema<GenerationSummary> = s.object<GenerationSummary>(
  {
    generationId: s.optional(s.string()),
    generationStatus: s.optional(s.lazy(() => generationStatusSchema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
