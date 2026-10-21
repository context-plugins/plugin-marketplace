import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessClassificationSchema, type BusinessClassification } from "./business-classification.js";

export type Embedded6 = {
  businessClassifications?: BusinessClassification[];
};

export const embedded6Schema: Schema<Embedded6> = s.object<Embedded6>({
  businessClassifications: s.optional(s.array(s.lazy(() => businessClassificationSchema))),
  _keysMap: {
    businessClassifications: "business-classifications",
  },
});
