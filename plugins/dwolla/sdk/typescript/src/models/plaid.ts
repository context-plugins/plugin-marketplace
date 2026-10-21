import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Plaid = {
  /** The Plaid public token for the connection */
  publicToken: string;
};

export const plaidSchema: Schema<Plaid> = s.object<Plaid>({
  publicToken: s.string(),
});
