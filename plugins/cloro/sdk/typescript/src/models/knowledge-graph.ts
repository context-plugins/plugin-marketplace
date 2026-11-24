import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { admissionSchema, type Admission } from "./admission.js";
import { artworkSchema, type Artwork } from "./artwork.js";
import { attributeSchema, type Attribute } from "./attribute.js";
import { contactSchema, type Contact } from "./contact.js";
import { hotelOptionSchema, type HotelOption } from "./hotel-option.js";
import { listenOnSchema, type ListenOn } from "./listen-on.js";
import { merchantVideoSchema, type MerchantVideo } from "./merchant-video.js";
import { notableAlumnusSchema, type NotableAlumnus } from "./notable-alumnus.js";
import { peopleAlsoSearchForSchema, type PeopleAlsoSearchFor } from "./people-also-search-for.js";
import { profileSchema, type Profile } from "./profile.js";
import { rating1Schema, type Rating1 } from "./rating1.js";
import { rating2Schema, type Rating2 } from "./rating2.js";
import { socialPostSchema, type SocialPost } from "./social-post.js";
import { source5Schema, type Source5 } from "./source5.js";
import { statsCardSchema, type StatsCard } from "./stats-card.js";
import { streamingOptionSchema, type StreamingOption } from "./streaming-option.js";
import { thingsToKnowSchema, type ThingsToKnow } from "./things-to-know.js";
import { trendingProductSchema, type TrendingProduct } from "./trending-product.js";
import { weatherSchema, type Weather } from "./weather.js";
import { webRatingSchema, type WebRating } from "./web-rating.js";

/**
 * Google's Knowledge Graph panel for the queried entity. Omitted from `result` when no Knowledge
 * Graph panel appears on the SERP — treat it as optional rather than expecting null.
 */
export type KnowledgeGraph = {
  /** Entity name as shown in the panel header */
  title?: string;
  /**
   * Entity category label as rendered by Google (e.g. "American rapper", "French museum").
   * Free-form string, not an enum.
   */
  type?: string;
  /** Google Knowledge Graph ID for the entity */
  kgmid?: string;
  /**
   * Short description of the entity (may be sourced from Wikipedia or Google's own knowledge base)
   */
  description?: string;
  /** URL of the entity's image as served by Google */
  imageUrl?: string;
  /** Official website URL for the entity */
  website?: string;
  /** Menu URL — present for restaurants and food businesses */
  menu?: string;
  /** Trailer URL — present for films and TV shows */
  trailer?: string;
  /** Attribution source for the entity description (typically Wikipedia) */
  source?: Source5;
  /**
   * Factual key-value pairs extracted from the panel (e.g. born, genre, label). Keys are free-form
   * strings as rendered by Google.
   */
  attributes?: Attribute[];
  /** Social media and external profile links for the entity */
  profiles?: Profile[];
  /** Related entities that users also search for */
  peopleAlsoSearchFor?: PeopleAlsoSearchFor[];
  /** "Things to know" topic clusters extracted from the panel */
  thingsToKnow?: ThingsToKnow[];
  /** Review platform ratings (e.g. Rotten Tomatoes, IMDb) — present for films and TV shows */
  ratings?: Rating1[];
  /** Streaming platform links for films and TV shows */
  streamingOptions?: StreamingOption[];
  /**
   * Web ratings from review platforms — present for local businesses (e.g. Google, Tripadvisor,
   * Yelp)
   */
  webRatings?: WebRating[];
  /** Statistics card — present for sports teams, organizations, and similar entities */
  statsCard?: StatsCard;
  /** Recent social media posts from the entity's official accounts */
  socialPosts?: SocialPost[];
  /** Notable alumni — present for universities and educational institutions */
  notableAlumni?: NotableAlumnus[];
  /** Contact and ordering links — present for local businesses */
  contact?: Contact[];
  /** Current weather — present for geographic entities (cities, regions) */
  weather?: Weather;
  /** Aggregate star rating — present for local businesses */
  rating?: Rating2;
  /** Admission options — present for museums, parks, and ticketed venues */
  admission?: Admission[];
  /** Notable artworks — present for artists and art institutions */
  artworks?: Artwork[];
  /** True when Google surfaces a 3D model viewer for the entity */
  has3DModel?: boolean;
  /** Hotel booking options — present for hotel entities */
  hotelOptions?: HotelOption[];
  /** Trending products — present for retail brands */
  trendingProducts?: TrendingProduct[];
  /** Merchant or brand video content — present for retail businesses */
  merchantVideos?: MerchantVideo[];
  /** Music streaming platform links — present for musicians and musical acts */
  listenOn?: ListenOn[];
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const knowledgeGraphSchema: Schema<KnowledgeGraph> = s.object<KnowledgeGraph>(
  {
    title: s.optional(s.string()),
    type: s.optional(s.string()),
    kgmid: s.optional(s.string()),
    description: s.optional(s.string()),
    imageUrl: s.optional(s.string()),
    website: s.optional(s.string()),
    menu: s.optional(s.string()),
    trailer: s.optional(s.string()),
    source: s.optional(s.lazy(() => source5Schema)),
    attributes: s.optional(s.array(s.lazy(() => attributeSchema))),
    profiles: s.optional(s.array(s.lazy(() => profileSchema))),
    peopleAlsoSearchFor: s.optional(s.array(s.lazy(() => peopleAlsoSearchForSchema))),
    thingsToKnow: s.optional(s.array(s.lazy(() => thingsToKnowSchema))),
    ratings: s.optional(s.array(s.lazy(() => rating1Schema))),
    streamingOptions: s.optional(s.array(s.lazy(() => streamingOptionSchema))),
    webRatings: s.optional(s.array(s.lazy(() => webRatingSchema))),
    statsCard: s.optional(s.lazy(() => statsCardSchema)),
    socialPosts: s.optional(s.array(s.lazy(() => socialPostSchema))),
    notableAlumni: s.optional(s.array(s.lazy(() => notableAlumnusSchema))),
    contact: s.optional(s.array(s.lazy(() => contactSchema))),
    weather: s.optional(s.lazy(() => weatherSchema)),
    rating: s.optional(s.lazy(() => rating2Schema)),
    admission: s.optional(s.array(s.lazy(() => admissionSchema))),
    artworks: s.optional(s.array(s.lazy(() => artworkSchema))),
    has3DModel: s.optional(s.boolean()),
    hotelOptions: s.optional(s.array(s.lazy(() => hotelOptionSchema))),
    trendingProducts: s.optional(s.array(s.lazy(() => trendingProductSchema))),
    merchantVideos: s.optional(s.array(s.lazy(() => merchantVideoSchema))),
    listenOn: s.optional(s.array(s.lazy(() => listenOnSchema))),
    redirectLink: s.optional(s.string()),
    _keysMap: {
      has3DModel: "has3dModel",
    },
  },
  { additionalProperties: s.json() },
);
