import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded12Schema, type Embedded12 } from "./embedded12.js";

/**
 * Error returned when required fields are missing when creating an Exchange or a debit card funding
 * source
 */
export type CardMissingRequiredFieldsError = {
  code: string;
  message: string;
  embedded: Embedded12;
};

export const cardMissingRequiredFieldsErrorSchema: Schema<CardMissingRequiredFieldsError> =
  s.object<CardMissingRequiredFieldsError>({
    code: s.string(),
    message: s.string(),
    embedded: embedded12Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
