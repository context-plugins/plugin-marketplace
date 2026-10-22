import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Custom attributes for some digital wallets. Currently only used by Click to Pay. */
export type Fields = Record<string, unknown>;

export const fieldsSchema: Schema<Fields> = s.of<Fields>(s.union([s.record(s.string(), s.unknown())]));
