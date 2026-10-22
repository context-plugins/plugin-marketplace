import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded10Schema, type Embedded10 } from "./embedded10.js";

/**
 * Error returned when creating an Exchange with an invalid token, or when the card data is invalid
 */
export type InvalidTokenError = {
  code: string;
  message: string;
  embedded: Embedded10;
};

export const invalidTokenErrorSchema: Schema<InvalidTokenError> = s.object<InvalidTokenError>({
  code: s.string(),
  message: s.string(),
  embedded: embedded10Schema,
  _keysMap: {
    embedded: "_embedded",
  },
});
