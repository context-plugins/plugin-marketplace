import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Content hash of the uploaded source; registering a digest the environment already has returns
 * that build and discards the upload
 */
export type ContentDigest1 = string;

export const contentDigest1InternalSchema: Schema<ContentDigest1> = s.of<ContentDigest1>(
  s.union([s.string()]),
);

export const contentDigest1Schema: Schema<ContentDigest1> = s.lazySchema(() =>
  s.of<ContentDigest1>(s.union([s.string().check(s.pattern("^sha256:[0-9a-f]{64}$"))])),
);
