import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InputHttpAuthTokensExtItemsType = {
  /** Shared secret provided by clients for authentication */
  token: string;
};

export const inputHttpAuthTokensExtItemsTypeSchema: Schema<InputHttpAuthTokensExtItemsType> =
  s.object<InputHttpAuthTokensExtItemsType>({
    token: s.string(),
  });
