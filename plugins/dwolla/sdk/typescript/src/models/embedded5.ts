import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { industryClassificationSchema, type IndustryClassification } from "./industry-classification.js";

export type Embedded5 = {
  industryClassifications?: IndustryClassification[];
};

export const embedded5Schema: Schema<Embedded5> = s.object<Embedded5>({
  industryClassifications: s.optional(s.array(s.lazy(() => industryClassificationSchema))),
  _keysMap: {
    industryClassifications: "industry-classifications",
  },
});
