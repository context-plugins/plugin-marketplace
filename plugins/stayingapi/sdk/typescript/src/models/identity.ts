import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { canonicalUrlInternalSchema, canonicalUrlSchema, type CanonicalUrl } from "./unions/canonical-url.js";
import { requestedIdInternalSchema, requestedIdSchema, type RequestedId } from "./unions/requested-id.js";
import { resolvedIdInternalSchema, resolvedIdSchema, type ResolvedId } from "./unions/resolved-id.js";

export type Identity = {
  /** The identifier you requested — the {id} path segment (a platform listingId or a URL). */
  requestedId: RequestedId;
  /**
   * The platform-native canonical id we resolved and returned (equals data.platformListingId).
   * STABLE — use THIS for equality checks and de-duplication, not canonicalUrl.
   */
  resolvedId: ResolvedId;
  /**
   * The exact fetched listing URL. It may include locale/occupancy/tracking query params (e.g.
   * booking `…/casa-de-alba.en-gb.html?selected_currency=USD&group_adults=2…`), so it is NOT safe
   * for naive string-equality or de-duplication — compare on resolvedId instead. Treat it as a
   * navigable link, not an identity key.
   */
  canonicalUrl: CanonicalUrl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const identityProperties: s.Shape<Identity> = {
  requestedId: requestedIdInternalSchema,
  resolvedId: resolvedIdInternalSchema,
  canonicalUrl: canonicalUrlInternalSchema,
};

export const identityInternalSchema: Schema<Identity> = s.object<Identity>(identityProperties, {
  additionalProperties: s.json(),
});

export const identitySchema: Schema<Identity> = s.lazySchema(() =>
  s.object<Identity>(
    {
      ...identityProperties,
      requestedId: requestedIdSchema,
      resolvedId: resolvedIdSchema,
      canonicalUrl: canonicalUrlSchema,
    },
    { additionalProperties: s.json() },
  ),
);
