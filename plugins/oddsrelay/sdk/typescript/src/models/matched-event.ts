import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { market1Schema, type Market1 } from "./market1.js";
import { commenceTimeSchema, type CommenceTime } from "./unions/commence-time.js";

/**
 * One fixture. Ids are opaque and stable across boards (one fixture is one id on every route), but
 * not durable keys: a paired fixture re-keys once when a higher-ranked exchange lists it.
 */
export type MatchedEvent = {
  eventId: string;
  sportKey: string;
  sportTitle: string;
  commenceTime: CommenceTime | null;
  /** Team sports. */
  homeTeam?: string | null;
  /** Team sports. */
  awayTeam?: string | null;
  /** A team fixture that does not split into sides. */
  eventName?: string;
  /** Racing: the course. */
  venue?: string | null;
  markets: Market1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchedEventSchema: Schema<MatchedEvent> = s.object<MatchedEvent>(
  {
    eventId: s.string(),
    sportKey: s.string(),
    sportTitle: s.string(),
    commenceTime: s.nullable(s.lazy(() => commenceTimeSchema)),
    homeTeam: s.optionalNullable(s.string()),
    awayTeam: s.optionalNullable(s.string()),
    eventName: s.optional(s.string()),
    venue: s.optionalNullable(s.string()),
    markets: s.array(s.lazy(() => market1Schema)),
    _keysMap: {
      eventId: "event_id",
      sportKey: "sport_key",
      sportTitle: "sport_title",
      commenceTime: "commence_time",
      homeTeam: "home_team",
      awayTeam: "away_team",
      eventName: "event_name",
    },
  },
  { additionalProperties: s.json() },
);
