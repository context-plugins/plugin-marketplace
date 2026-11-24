import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { specificStartPosition2Schema, type SpecificStartPosition2 } from "./specific-start-position2.js";

/** The strategy that the stream uses for CDC replication. */
export type CdcStrategy = {
  /** Optional. Start replicating from the most recent position in the source. */
  mostRecentStartPosition?: Record<string, unknown>;
  /** Optional. Resume replication from the next available position in the source. */
  nextAvailableStartPosition?: Record<string, unknown>;
  /** Optional. Start replicating from a specific position in the source. */
  specificStartPosition?: SpecificStartPosition2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cdcStrategySchema: Schema<CdcStrategy> = s.object<CdcStrategy>(
  {
    mostRecentStartPosition: s.optional(s.record(s.string(), s.unknown())),
    nextAvailableStartPosition: s.optional(s.record(s.string(), s.unknown())),
    specificStartPosition: s.optional(s.lazy(() => specificStartPosition2Schema)),
  },
  { additionalProperties: s.json() },
);
