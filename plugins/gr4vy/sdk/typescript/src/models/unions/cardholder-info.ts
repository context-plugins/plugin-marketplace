import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CardholderInfo = string;

export const cardholderInfoSchema: Schema<CardholderInfo> = s.of<CardholderInfo>(s.union([s.string()]));
