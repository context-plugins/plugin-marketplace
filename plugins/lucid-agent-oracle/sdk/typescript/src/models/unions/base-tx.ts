import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BaseTx = string;

export const baseTxSchema: Schema<BaseTx> = s.of<BaseTx>(s.union([s.string()]));
