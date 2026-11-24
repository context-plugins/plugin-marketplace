import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** exact symbol, e.g. BTC, ETH, SOL */
export type Symbol = string;

export const symbolSchema: Schema<Symbol> = s.of<Symbol>(s.union([s.string()]));
