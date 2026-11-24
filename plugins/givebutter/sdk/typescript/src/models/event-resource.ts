import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventResource = {
  title: string;
  type: string;
  locationName: string;
  addressFormatted: string;
  googlePlaceId: string;
  startAt: string;
  endAt: string;
  timezone: string;
  details: string;
  private: string;
  ticketsRequired: string;
  livestream: string;
  livestreamStartAt: string;
  livestreamEndAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventResourceSchema: Schema<EventResource> = s.object<EventResource>(
  {
    title: s.string(),
    type: s.string(),
    locationName: s.string(),
    addressFormatted: s.string(),
    googlePlaceId: s.string(),
    startAt: s.string(),
    endAt: s.string(),
    timezone: s.string(),
    details: s.string(),
    private: s.string(),
    ticketsRequired: s.string(),
    livestream: s.string(),
    livestreamStartAt: s.string(),
    livestreamEndAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      locationName: "location_name",
      addressFormatted: "address_formatted",
      googlePlaceId: "google_place_id",
      startAt: "start_at",
      endAt: "end_at",
      ticketsRequired: "tickets_required",
      livestreamStartAt: "livestream_start_at",
      livestreamEndAt: "livestream_end_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
