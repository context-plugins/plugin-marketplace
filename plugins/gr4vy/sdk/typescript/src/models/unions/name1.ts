import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Reflects your doing business as (DBA) name. */
export type Name1 = string;

export const name1Schema: Schema<Name1> = s.of<Name1>(s.union([s.string()]));
