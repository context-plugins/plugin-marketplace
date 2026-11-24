import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { kindSchema, type Kind } from "../kind.js";

/** Filter memories by kind: `task`, `monitor`, or `findall`. */
export type Kind5 = Kind;

export const kind5Schema: Schema<Kind5> = s.of<Kind5>(s.union([s.lazy(() => kindSchema)]));
