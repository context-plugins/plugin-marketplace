import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded15Schema, type Embedded15 } from "./embedded15.js";

export type DepositAccountRestrictedError = {
  code: string;
  message: string;
  embedded?: Embedded15;
};

export const depositAccountRestrictedErrorSchema: Schema<DepositAccountRestrictedError> =
  s.object<DepositAccountRestrictedError>({
    code: s.string(),
    message: s.string(),
    embedded: s.optional(s.lazy(() => embedded15Schema)),
    _keysMap: {
      embedded: "_embedded",
    },
  });
