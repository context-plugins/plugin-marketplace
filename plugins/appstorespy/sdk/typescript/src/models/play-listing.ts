import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A Google Play store listing crawled live for one country and language.
 *
 * Unlike `PlayApp`, nothing here comes from AppstoreSpy storage: the fields are exactly what Google
 * Play served for the requested `country` and `language` at `crawled`, so any locale Google Play
 * Console accepts can be requested.
 */
export type PlayListing = {
  /** The app package name */
  id: string;
  /** Country the listing was requested for (Google Play `gl`) */
  country: string;
  /** Language the listing was requested in (Google Play `hl`) */
  language: string;
  /** When Google Play was crawled, UTC */
  crawled: Date;
  /** Link to the listing on Google Play for this country and language */
  url: string;
  /** Title as shown on Google Play */
  name: string;
  /** Short description as shown on Google Play */
  short?: string;
  /** Full description as shown on Google Play */
  description?: string;
  /** What's new as shown on Google Play */
  whatsnew?: string;
  /** Icon URL */
  icon?: string;
  /** Feature graphic URL */
  feature?: string;
  /** Promo video Youtube link */
  trailer?: string;
  /** Screenshot URLs in the order Google Play shows them */
  screenshots: string[];
  /**
   * True when the developer has not supplied this language and Google Play shows a machine
   * translation of the default listing; `short` and `description` are then that translation. False
   * means the texts are the developer's own: a listing in this language, or the default listing
   * when Google Play does not translate it.
   */
  translated: boolean;
  /**
   * Source language of the machine translation, as Google Play names it in the requested language
   */
  translatedFrom?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playListingSchema: Schema<PlayListing> = s.object<PlayListing>(
  {
    id: s.string(),
    country: s.string(),
    language: s.string(),
    crawled: s.dateTime(),
    url: s.string(),
    name: s.string(),
    short: s.optional(s.string()),
    description: s.optional(s.string()),
    whatsnew: s.optional(s.string()),
    icon: s.optional(s.string()),
    feature: s.optional(s.string()),
    trailer: s.optional(s.string()),
    screenshots: s.array(s.string()),
    translated: s.boolean(),
    translatedFrom: s.optional(s.string()),
    _keysMap: {
      translatedFrom: "translated_from",
    },
  },
  { additionalProperties: s.json() },
);
