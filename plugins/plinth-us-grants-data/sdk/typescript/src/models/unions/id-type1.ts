import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { idTypeSchema, type IdType } from "../id-type.js";

export type IdType1 = IdType;

export const idType1Schema: Schema<IdType1> = s.of<IdType1>(s.union([s.lazy(() => idTypeSchema)]));
