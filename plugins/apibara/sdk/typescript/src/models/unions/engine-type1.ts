import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { engineTypeSchema, type EngineType } from "../engine-type.js";

export type EngineType1 = EngineType | EngineType[];

export const engineType1Schema: Schema<EngineType1> = s.of<EngineType1>(
  s.union([s.lazy(() => engineTypeSchema), s.array(s.lazy(() => engineTypeSchema))]),
);
