import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of integers representing the UTF-8 bytes representation of the token. Useful in instances
 * where characters are represented by multiple tokens and their byte representations must be
 * combined to generate the correct text representation. Can be `null` if there is no bytes
 * representation for the token.
 */
export type Bytes = number[];

export const bytesSchema: Schema<Bytes> = s.of<Bytes>(s.union([s.array(s.int())]));
