import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional signature associated with the reasoning content. */
export type Signature = string;

export const signatureSchema: Schema<Signature> = s.of<Signature>(s.union([s.string()]));
