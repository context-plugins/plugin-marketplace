import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The embedding vector, which is a list of floats or a base64-encoded string. The length of vector
 * depends on the model.
 */
export type Embedding = number[] | Uint8Array;

export const embeddingSchema: Schema<Embedding> = s.of<Embedding>(s.union([s.array(s.float64()), s.bytes()]));
