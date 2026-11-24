import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusOddsRelayDiscoveryApiSchema,
  type StatusOddsRelayDiscoveryApi,
} from "./status-odds-relay-discovery-api.js";
import { commenceTimeSchema, type CommenceTime } from "./unions/commence-time.js";

export type Event = {
  id: string;
  sportKey: string;
  sportTitle: string;
  commenceTime: CommenceTime | null;
  homeTeam: string | null;
  awayTeam: string | null;
  status: StatusOddsRelayDiscoveryApi;
  /** The matched boards carrying it. */
  hasCoverage: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    id: s.string(),
    sportKey: s.string(),
    sportTitle: s.string(),
    commenceTime: s.nullable(s.lazy(() => commenceTimeSchema)),
    homeTeam: s.nullable(s.string()),
    awayTeam: s.nullable(s.string()),
    status: statusOddsRelayDiscoveryApiSchema,
    hasCoverage: s.array(s.string()),
    _keysMap: {
      sportKey: "sport_key",
      sportTitle: "sport_title",
      commenceTime: "commence_time",
      homeTeam: "home_team",
      awayTeam: "away_team",
      hasCoverage: "has_coverage",
    },
  },
  { additionalProperties: s.json() },
);
