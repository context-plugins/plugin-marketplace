import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Organization name to resolve when no EIN is known. Matched exactly after normalizing case and
 * punctuation; a name several organizations share answers `ambiguous` with the candidates, and
 * `state` narrows it., A label for the digest header.
 */
export type Name1 = string;

export const name1Schema: Schema<Name1> = s.of<Name1>(s.union([s.string()]));
