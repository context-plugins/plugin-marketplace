import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The exact fetched listing URL. It may include locale/occupancy/tracking query params (e.g.
 * booking `…/casa-de-alba.en-gb.html?selected_currency=USD&group_adults=2…`), so it is NOT safe for
 * naive string-equality or de-duplication — compare on resolvedId instead. Treat it as a navigable
 * link, not an identity key.
 */
export type CanonicalUrl = string;

export const canonicalUrlInternalSchema: Schema<CanonicalUrl> = s.of<CanonicalUrl>(s.union([s.string()]));

export const canonicalUrlSchema: Schema<CanonicalUrl> = s.lazySchema(() =>
  s.of<CanonicalUrl>(s.union([s.string().check(s.url())])),
);
