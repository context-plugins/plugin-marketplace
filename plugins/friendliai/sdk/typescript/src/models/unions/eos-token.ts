import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A list of endpoint sentence tokens. */
export type EosToken = number[];

export const eosTokenSchema: Schema<EosToken> = s.of<EosToken>(s.union([s.array(s.int())]));
