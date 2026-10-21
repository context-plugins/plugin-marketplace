import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Prerequisite = {
  key: string;
  variation: number;
};

export const prerequisiteSchema: Schema<Prerequisite> = s.object<Prerequisite>({
  key: s.string(),
  variation: s.int(),
});
