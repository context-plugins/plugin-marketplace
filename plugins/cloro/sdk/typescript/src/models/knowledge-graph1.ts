import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { admission1Schema, type Admission1 } from "./admission1.js";
import { artwork1Schema, type Artwork1 } from "./artwork1.js";
import { attributeSchema, type Attribute } from "./attribute.js";
import { contact1Schema, type Contact1 } from "./contact1.js";
import { hotelOption1Schema, type HotelOption1 } from "./hotel-option1.js";
import { listenOn1Schema, type ListenOn1 } from "./listen-on1.js";
import { merchantVideo1Schema, type MerchantVideo1 } from "./merchant-video1.js";
import { notableAlumnus1Schema, type NotableAlumnus1 } from "./notable-alumnus1.js";
import { peopleAlsoSearchFor1Schema, type PeopleAlsoSearchFor1 } from "./people-also-search-for1.js";
import { profile1Schema, type Profile1 } from "./profile1.js";
import { rating2Schema, type Rating2 } from "./rating2.js";
import { rating3Schema, type Rating3 } from "./rating3.js";
import { socialPost1Schema, type SocialPost1 } from "./social-post1.js";
import { source11Schema, type Source11 } from "./source11.js";
import { statsCardSchema, type StatsCard } from "./stats-card.js";
import { streamingOption1Schema, type StreamingOption1 } from "./streaming-option1.js";
import { thingsToKnowSchema, type ThingsToKnow } from "./things-to-know.js";
import { trendingProduct1Schema, type TrendingProduct1 } from "./trending-product1.js";
import { weatherSchema, type Weather } from "./weather.js";
import { webRating1Schema, type WebRating1 } from "./web-rating1.js";

/**
 * Google's Knowledge Graph panel for the queried entity. Omitted from `result` when no Knowledge
 * Graph panel appears on the SERP — treat it as optional rather than expecting null.
 */
export type KnowledgeGraph1 = {
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
  source?: Source11;
  /**
   * Factual key-value pairs extracted from the panel (e.g. born, genre, label). Keys are free-form
   * strings as rendered by Google.
   */
  attributes?: Attribute[];
  /** Social media and external profile links for the entity */
  profiles?: Profile1[];
  /** Related entities that users also search for */
  peopleAlsoSearchFor?: PeopleAlsoSearchFor1[];
  /** "Things to know" topic clusters extracted from the panel */
  thingsToKnow?: ThingsToKnow[];
  /** Review platform ratings (e.g. Rotten Tomatoes, IMDb) — present for films and TV shows */
  ratings?: Rating3[];
  /** Streaming platform links for films and TV shows */
  streamingOptions?: StreamingOption1[];
  /**
   * Web ratings from review platforms — present for local businesses (e.g. Google, Tripadvisor,
   * Yelp)
   */
  webRatings?: WebRating1[];
  /** Statistics card — present for sports teams, organizations, and similar entities */
  statsCard?: StatsCard;
  /** Recent social media posts from the entity's official accounts */
  socialPosts?: SocialPost1[];
  /** Notable alumni — present for universities and educational institutions */
  notableAlumni?: NotableAlumnus1[];
  /** Contact and ordering links — present for local businesses */
  contact?: Contact1[];
  /** Current weather — present for geographic entities (cities, regions) */
  weather?: Weather;
  /** Aggregate star rating — present for local businesses */
  rating?: Rating2;
  /** Admission options — present for museums, parks, and ticketed venues */
  admission?: Admission1[];
  /** Notable artworks — present for artists and art institutions */
  artworks?: Artwork1[];
  /** True when Google surfaces a 3D model viewer for the entity */
  has3DModel?: boolean;
  /** Hotel booking options — present for hotel entities */
  hotelOptions?: HotelOption1[];
  /** Trending products — present for retail brands */
  trendingProducts?: TrendingProduct1[];
  /** Merchant or brand video content — present for retail businesses */
  merchantVideos?: MerchantVideo1[];
  /** Music streaming platform links — present for musicians and musical acts */
  listenOn?: ListenOn1[];
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const knowledgeGraph1Schema: Schema<KnowledgeGraph1> = s.object<KnowledgeGraph1>(
  {
    title: s.optional(s.string()),
    type: s.optional(s.string()),
    kgmid: s.optional(s.string()),
    description: s.optional(s.string()),
    imageUrl: s.optional(s.string()),
    website: s.optional(s.string()),
    menu: s.optional(s.string()),
    trailer: s.optional(s.string()),
    source: s.optional(s.lazy(() => source11Schema)),
    attributes: s.optional(s.array(s.lazy(() => attributeSchema))),
    profiles: s.optional(s.array(s.lazy(() => profile1Schema))),
    peopleAlsoSearchFor: s.optional(s.array(s.lazy(() => peopleAlsoSearchFor1Schema))),
    thingsToKnow: s.optional(s.array(s.lazy(() => thingsToKnowSchema))),
    ratings: s.optional(s.array(s.lazy(() => rating3Schema))),
    streamingOptions: s.optional(s.array(s.lazy(() => streamingOption1Schema))),
    webRatings: s.optional(s.array(s.lazy(() => webRating1Schema))),
    statsCard: s.optional(s.lazy(() => statsCardSchema)),
    socialPosts: s.optional(s.array(s.lazy(() => socialPost1Schema))),
    notableAlumni: s.optional(s.array(s.lazy(() => notableAlumnus1Schema))),
    contact: s.optional(s.array(s.lazy(() => contact1Schema))),
    weather: s.optional(s.lazy(() => weatherSchema)),
    rating: s.optional(s.lazy(() => rating2Schema)),
    admission: s.optional(s.array(s.lazy(() => admission1Schema))),
    artworks: s.optional(s.array(s.lazy(() => artwork1Schema))),
    has3DModel: s.optional(s.boolean()),
    hotelOptions: s.optional(s.array(s.lazy(() => hotelOption1Schema))),
    trendingProducts: s.optional(s.array(s.lazy(() => trendingProduct1Schema))),
    merchantVideos: s.optional(s.array(s.lazy(() => merchantVideo1Schema))),
    listenOn: s.optional(s.array(s.lazy(() => listenOn1Schema))),
    redirectLink: s.optional(s.string()),
    _keysMap: {
      has3DModel: "has3dModel",
    },
  },
  { additionalProperties: s.json() },
);
