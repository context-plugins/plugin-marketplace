import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single event to be tracked for the user. */
export type TrackEvent = {
  /**
   * The key of the event to track. Use "impression" for automatic view tracking or a custom event
   * key defined in the Personalize Management API.
   */
  eventKey: string;
  /** The UID of the experience associated with this event. Required for impression events. */
  experienceUid?: string;
  /** The UID of the variant shown to the user. Required for impression events. */
  variantUid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackEventSchema: Schema<TrackEvent> = s.object<TrackEvent>(
  {
    eventKey: s.string(),
    experienceUid: s.optional(s.string()),
    variantUid: s.optional(s.string()),
    _keysMap: {
      experienceUid: "experience_uid",
      variantUid: "variant_uid",
    },
  },
  { additionalProperties: s.json() },
);
