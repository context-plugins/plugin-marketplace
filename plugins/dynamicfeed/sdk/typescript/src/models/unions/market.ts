import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex */
export type Market = string;

export const marketSchema: Schema<Market> = s.of<Market>(s.union([s.string()]));
