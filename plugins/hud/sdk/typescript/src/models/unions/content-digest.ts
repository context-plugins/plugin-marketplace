import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContentDigest = string;

export const contentDigestSchema: Schema<ContentDigest> = s.of<ContentDigest>(s.union([s.string()]));
