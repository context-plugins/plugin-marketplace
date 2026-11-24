import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The model type. You need to set ModelType if you are creating a flywheel for a new model. */
export const ModelType = {
  DocumentClassifier: "DOCUMENT_CLASSIFIER",
  EntityRecognizer: "ENTITY_RECOGNIZER",
} as const;
export type ModelType = (typeof ModelType)[keyof typeof ModelType] | (string & {});

export const modelTypeSchema: EnumSchema<ModelType> = s.enumOf<ModelType>(ModelType);
