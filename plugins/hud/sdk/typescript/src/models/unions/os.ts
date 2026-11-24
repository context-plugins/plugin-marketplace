import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Os = string;

export const osInternalSchema: Schema<Os> = s.of<Os>(s.union([s.string()]));

export const osSchema: Schema<Os> = s.lazySchema(() => s.of<Os>(s.union([s.string().check(s.minLength(1))])));
