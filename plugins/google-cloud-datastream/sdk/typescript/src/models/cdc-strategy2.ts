import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { specificStartPosition2Schema, type SpecificStartPosition2 } from "./specific-start-position2.js";

/**
 * Optional. The CDC strategy of the stream. If not set, the system's default value will be used.
 */
export type CdcStrategy2 = {
  /** Optional. Start replicating from the most recent position in the source. */
  mostRecentStartPosition?: Record<string, unknown>;
  /** Optional. Resume replication from the next available position in the source. */
  nextAvailableStartPosition?: Record<string, unknown>;
  /** Optional. Start replicating from a specific position in the source. */
  specificStartPosition?: SpecificStartPosition2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cdcStrategy2Schema: Schema<CdcStrategy2> = s.object<CdcStrategy2>(
  {
    mostRecentStartPosition: s.optional(s.record(s.string(), s.unknown())),
    nextAvailableStartPosition: s.optional(s.record(s.string(), s.unknown())),
    specificStartPosition: s.optional(s.lazy(() => specificStartPosition2Schema)),
  },
  { additionalProperties: s.json() },
);
