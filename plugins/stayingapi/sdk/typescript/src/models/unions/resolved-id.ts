import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The platform-native canonical id we resolved and returned (equals data.platformListingId). STABLE
 * — use THIS for equality checks and de-duplication, not canonicalUrl.
 */
export type ResolvedId = string;

export const resolvedIdInternalSchema: Schema<ResolvedId> = s.of<ResolvedId>(s.union([s.string()]));

export const resolvedIdSchema: Schema<ResolvedId> = s.lazySchema(() =>
  s.of<ResolvedId>(s.union([s.string().check(s.minLength(1))])),
);
