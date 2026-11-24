import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Sessionid = string;

export const sessionidSchema: Schema<Sessionid> = s.of<Sessionid>(s.union([s.string()]));
