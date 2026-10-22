import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The thumbprint of the API key pair that created the API key pair, when it was created by another
 * API key.
 */
export type Thumbprint = string;

export const thumbprintSchema: Schema<Thumbprint> = s.of<Thumbprint>(s.union([s.string()]));
