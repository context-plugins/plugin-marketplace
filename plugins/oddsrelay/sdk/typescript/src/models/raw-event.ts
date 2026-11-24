import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bookmakerSchema, type Bookmaker } from "./bookmaker.js";
import { commenceTimeSchema, type CommenceTime } from "./unions/commence-time.js";

export type RawEvent = {
  id: string;
  clusterId: string | null;
  sportKey: string;
  sportTitle: string;
  commenceTime: CommenceTime | null;
  homeTeam: string | null;
  awayTeam: string | null;
  bookmakers: Bookmaker[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rawEventSchema: Schema<RawEvent> = s.object<RawEvent>(
  {
    id: s.string(),
    clusterId: s.nullable(s.string()),
    sportKey: s.string(),
    sportTitle: s.string(),
    commenceTime: s.nullable(s.lazy(() => commenceTimeSchema)),
    homeTeam: s.nullable(s.string()),
    awayTeam: s.nullable(s.string()),
    bookmakers: s.array(s.lazy(() => bookmakerSchema)),
    _keysMap: {
      clusterId: "cluster_id",
      sportKey: "sport_key",
      sportTitle: "sport_title",
      commenceTime: "commence_time",
      homeTeam: "home_team",
      awayTeam: "away_team",
    },
  },
  { additionalProperties: s.json() },
);
