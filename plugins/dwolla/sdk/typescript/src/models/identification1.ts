import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/**
 * A government identification document for the cardholder. Supplying this value reduces the number
 * of sanctions screening alerts raised when the card is processed.
 */
export type Identification1 = {
  /** The kind of government identification document provided. */
  type: Type1;
  /** The identification document number. */
  number: string;
  /**
   * Country that issued the identification document, as a two-letter country code (ISO 3166-1
   * alpha-2). Must be exactly 2 characters.
   */
  country: string;
};

export const identification1Schema: Schema<Identification1> = s.object<Identification1>({
  type: type1Schema,
  number: s.string(),
  country: s.string(),
});
