import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { kindSchema, type Kind } from "../kind.js";

export type Kind1 = Kind;

export const kind1Schema: Schema<Kind1> = s.of<Kind1>(s.union([s.lazy(() => kindSchema)]));
