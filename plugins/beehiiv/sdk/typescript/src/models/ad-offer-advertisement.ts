import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdOfferAdvertisement = {
  /** The ID of the advertisement creative. */
  id: string;
  /** Whether this is the recommended creative for the offer. */
  recommended: boolean;
  /** The advertisement name. */
  name: string;
  /** The advertisement headline. */
  headline: string;
  /** The advertisement description. */
  description?: string;
  /** The advertisement creative kind. */
  kind: string;
  /** The sponsor label used by the creative. */
  sponsorText: string;
  /** The plain text extracted from the advertisement creative. */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferAdvertisementSchema: Schema<AdOfferAdvertisement> = s.object<AdOfferAdvertisement>(
  {
    id: s.string(),
    recommended: s.boolean(),
    name: s.string(),
    headline: s.string(),
    description: s.optional(s.string()),
    kind: s.string(),
    sponsorText: s.string(),
    text: s.string(),
    _keysMap: {
      sponsorText: "sponsor_text",
    },
  },
  { additionalProperties: s.json() },
);
