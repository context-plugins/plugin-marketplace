import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { digitalWalletAddressSchema, type DigitalWalletAddress } from "../digital-wallet-address.js";

/** The merchant address associated with the digital wallet. */
export type Address12 = DigitalWalletAddress;

export const address12Schema: Schema<Address12> = s.of<Address12>(
  s.union([s.lazy(() => digitalWalletAddressSchema)]),
);
