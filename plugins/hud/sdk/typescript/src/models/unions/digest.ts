import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Digest = string;

export const digestSchema: Schema<Digest> = s.of<Digest>(s.union([s.string()]));
