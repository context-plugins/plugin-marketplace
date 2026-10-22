import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Namesearch = string;

export const namesearchSchema: Schema<Namesearch> = s.of<Namesearch>(s.union([s.string()]));
