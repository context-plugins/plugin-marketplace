import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SolanaTx = string;

export const solanaTxSchema: Schema<SolanaTx> = s.of<SolanaTx>(s.union([s.string()]));
