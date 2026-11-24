import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Slug = string;

export const slugSchema: Schema<Slug> = s.of<Slug>(s.union([s.string()]));
