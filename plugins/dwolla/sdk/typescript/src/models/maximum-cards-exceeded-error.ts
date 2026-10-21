import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded12Schema, type Embedded12 } from "./embedded12.js";

/** Error returned when a customer has exceeded the maximum number of debit card funding sources */
export type MaximumCardsExceededError = {
  code: string;
  message: string;
  embedded: Embedded12;
};

export const maximumCardsExceededErrorSchema: Schema<MaximumCardsExceededError> =
  s.object<MaximumCardsExceededError>({
    code: s.string(),
    message: s.string(),
    embedded: embedded12Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
