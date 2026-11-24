import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Model type of the flywheel's model. */
export const ModelType1 = {
  DocumentClassifier: "DOCUMENT_CLASSIFIER",
  EntityRecognizer: "ENTITY_RECOGNIZER",
} as const;
export type ModelType1 = (typeof ModelType1)[keyof typeof ModelType1] | (string & {});

export const modelType1Schema: EnumSchema<ModelType1> = s.enumOf<ModelType1>(ModelType1);
