import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VncUrl = string;

export const vncUrlSchema: Schema<VncUrl> = s.of<VncUrl>(s.union([s.string()]));
