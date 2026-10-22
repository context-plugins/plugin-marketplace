import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded15Schema, type Embedded15 } from "./embedded15.js";

export type InvalidDestinationBankAccountTypeError = {
  code: string;
  message: string;
  embedded?: Embedded15;
};

export const invalidDestinationBankAccountTypeErrorSchema: Schema<InvalidDestinationBankAccountTypeError> =
  s.object<InvalidDestinationBankAccountTypeError>({
    code: s.string(),
    message: s.string(),
    embedded: s.optional(s.lazy(() => embedded15Schema)),
    _keysMap: {
      embedded: "_embedded",
    },
  });
