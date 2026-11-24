import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Connectionid = string;

export const connectionidSchema: Schema<Connectionid> = s.of<Connectionid>(s.union([s.string()]));
