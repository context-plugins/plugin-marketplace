import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type InformationNovelty = number;

export const informationNoveltySchema: Schema<InformationNovelty> = s.of<InformationNovelty>(
  s.union([s.int()]),
);
