import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssessmentLineItem1 = {
  sourcedId: string;
};

export const assessmentLineItem1Schema: Schema<AssessmentLineItem1> = s.object<AssessmentLineItem1>({
  sourcedId: s.string(),
});
