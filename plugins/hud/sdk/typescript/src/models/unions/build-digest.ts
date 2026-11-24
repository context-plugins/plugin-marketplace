import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BuildDigest = string;

export const buildDigestSchema: Schema<BuildDigest> = s.of<BuildDigest>(s.union([s.string()]));
