import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Format = string;

export const formatSchema: Schema<Format> = s.of<Format>(s.union([s.string()]));
