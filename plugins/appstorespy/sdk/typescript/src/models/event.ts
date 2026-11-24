import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Event = {
  id: string;
  app: string;
  store: string;
  type: string;
  title: string;
  text: string;
  image: string;
  country: string;
  state: string;
  crawled: Date;
  dateFrom: Date;
  dateTo?: Date;
  video?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    id: s.string(),
    app: s.string(),
    store: s.string(),
    type: s.string(),
    title: s.string(),
    text: s.string(),
    image: s.string(),
    country: s.string(),
    state: s.string(),
    crawled: s.dateTime(),
    dateFrom: s.dateTime(),
    dateTo: s.optional(s.dateTime()),
    video: s.optional(s.string()),
    _keysMap: {
      dateFrom: "date_from",
      dateTo: "date_to",
    },
  },
  { additionalProperties: s.json() },
);
