import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { digitalWalletAddressSchema, type DigitalWalletAddress } from "../digital-wallet-address.js";

export type Address13 = DigitalWalletAddress;

export const address13Schema: Schema<Address13> = s.of<Address13>(
  s.union([s.lazy(() => digitalWalletAddressSchema)]),
);
