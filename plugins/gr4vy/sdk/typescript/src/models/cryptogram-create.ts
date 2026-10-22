import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CryptogramCreate = {
  /** Defines if the request is merchant initiated or not. */
  merchantInitiated: boolean;
};

export const cryptogramCreateSchema: Schema<CryptogramCreate> = s.object<CryptogramCreate>({
  merchantInitiated: s.boolean(),
  _keysMap: {
    merchantInitiated: "merchant_initiated",
  },
});
