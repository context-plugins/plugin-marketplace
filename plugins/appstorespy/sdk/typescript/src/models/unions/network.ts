import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Network = string | string[];

export const networkSchema: Schema<Network> = s.of<Network>(s.union([s.string(), s.array(s.string())]));
