import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** EIN in any format (131837418 or 13-1837418). Either this or `name`. */
export type Ein1 = string;

export const ein1Schema: Schema<Ein1> = s.of<Ein1>(s.union([s.string()]));
