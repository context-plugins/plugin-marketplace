import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SizeBytes = number;

export const sizeBytesSchema: Schema<SizeBytes> = s.of<SizeBytes>(s.union([s.int()]));
