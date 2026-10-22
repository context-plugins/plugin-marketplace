import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if this payment service supports network tokens. */
export type NetworkTokensEnabled = boolean;

export const networkTokensEnabledSchema: Schema<NetworkTokensEnabled> = s.of<NetworkTokensEnabled>(
  s.union([s.boolean()]),
);
