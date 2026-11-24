import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { formatSchema, type Format } from "../format.js";

export type Format1 = Format;

export const format1Schema: Schema<Format1> = s.of<Format1>(s.union([s.lazy(() => formatSchema)]));
