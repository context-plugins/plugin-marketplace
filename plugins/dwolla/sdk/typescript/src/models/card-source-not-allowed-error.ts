import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded59Schema, type Embedded59 } from "./embedded59.js";

/** Error returned when attempting to use a debit card funding source as the transfer source */
export type CardSourceNotAllowedError = {
  code: string;
  message: string;
  embedded: Embedded59;
};

export const cardSourceNotAllowedErrorSchema: Schema<CardSourceNotAllowedError> =
  s.object<CardSourceNotAllowedError>({
    code: s.string(),
    message: s.string(),
    embedded: embedded59Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
