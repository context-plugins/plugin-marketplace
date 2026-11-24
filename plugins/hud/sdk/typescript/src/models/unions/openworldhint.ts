import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Openworldhint = boolean;

export const openworldhintSchema: Schema<Openworldhint> = s.of<Openworldhint>(s.union([s.boolean()]));
