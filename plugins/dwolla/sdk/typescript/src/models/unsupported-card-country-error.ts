import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded10Schema, type Embedded10 } from "./embedded10.js";

/**
 * Error returned when attempting to create a debit card funding source from an unsupported country
 */
export type UnsupportedCardCountryError = {
  code: string;
  message: string;
  embedded: Embedded10;
};

export const unsupportedCardCountryErrorSchema: Schema<UnsupportedCardCountryError> =
  s.object<UnsupportedCardCountryError>({
    code: s.string(),
    message: s.string(),
    embedded: embedded10Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
