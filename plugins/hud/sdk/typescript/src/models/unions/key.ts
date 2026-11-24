import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Key = string;

export const keySchema: Schema<Key> = s.of<Key>(s.union([s.string()]));
