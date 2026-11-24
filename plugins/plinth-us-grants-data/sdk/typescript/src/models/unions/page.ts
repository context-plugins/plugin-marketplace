import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Page = string;

export const pageSchema: Schema<Page> = s.of<Page>(s.union([s.string()]));
