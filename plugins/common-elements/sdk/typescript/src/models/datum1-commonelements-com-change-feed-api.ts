import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum1CommonelementsComChangeFeedApi = {
  /** One of the 13 change kinds. */
  changeKind?: string;
  /** Events of this kind in the window. */
  eventCount?: number;
  /** Distinct associations with at least one such event. */
  orgCount?: number;
  /** Distinct states represented. */
  statesCovered?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1CommonelementsComChangeFeedApiSchema: Schema<Datum1CommonelementsComChangeFeedApi> =
  s.object<Datum1CommonelementsComChangeFeedApi>(
    {
      changeKind: s.optional(s.string()),
      eventCount: s.optional(s.float64()),
      orgCount: s.optional(s.float64()),
      statesCovered: s.optional(s.float64()),
      _keysMap: {
        changeKind: "change_kind",
        eventCount: "event_count",
        orgCount: "org_count",
        statesCovered: "states_covered",
      },
    },
    { additionalProperties: s.json() },
  );
