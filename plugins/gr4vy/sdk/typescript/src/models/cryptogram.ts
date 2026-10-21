import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type18, type18Schema } from "./type18.js";

export type Cryptogram = {
  /** Always `network-token-cryptogram`. @default Type18.NetworkTokenCryptogram */
  type?: Type18;
  /** The cryptogram of the network token. */
  cryptogram: string;
};

export const cryptogramSchema: Schema<Cryptogram> = s.object<Cryptogram>({
  type: s.defaulted(type18Schema, Type18.NetworkTokenCryptogram),
  cryptogram: s.string(),
});
