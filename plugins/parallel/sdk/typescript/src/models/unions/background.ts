import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Background = boolean;

export const backgroundSchema: Schema<Background> = s.of<Background>(s.union([s.boolean()]));
