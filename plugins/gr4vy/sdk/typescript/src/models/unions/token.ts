import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The opaque token as received from the Google Pay JS library. This format may change between JS
 * library versions.
 */
export type Token = string | Record<string, unknown>;

export const tokenSchema: Schema<Token> = s.of<Token>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
