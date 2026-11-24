import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The identifier you requested — the {id} path segment (a platform listingId or a URL). */
export type RequestedId = string;

export const requestedIdInternalSchema: Schema<RequestedId> = s.of<RequestedId>(s.union([s.string()]));

export const requestedIdSchema: Schema<RequestedId> = s.lazySchema(() =>
  s.of<RequestedId>(s.union([s.string().check(s.minLength(1))])),
);
