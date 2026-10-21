import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Input field names to populate; None populates all step inputs. */
export type Inputs1 = string[];

export const inputs1Schema: Schema<Inputs1> = s.of<Inputs1>(s.union([s.array(s.string())]));
