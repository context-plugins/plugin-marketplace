import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Enabled = boolean;

export const enabledSchema: Schema<Enabled> = s.of<Enabled>(s.union([s.boolean()]));
