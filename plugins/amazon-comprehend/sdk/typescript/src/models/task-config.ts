import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentClassificationConfigSchema,
  type DocumentClassificationConfig,
} from "./document-classification-config.js";
import { entityRecognitionConfigSchema, type EntityRecognitionConfig } from "./entity-recognition-config.js";
import { languageCode8Schema, type LanguageCode8 } from "./language-code8.js";

export type TaskConfig = {
  /** Language code for the language that the model supports. */
  languageCode: LanguageCode8;
  documentClassificationConfig?: DocumentClassificationConfig;
  entityRecognitionConfig?: EntityRecognitionConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskConfigSchema: Schema<TaskConfig> = s.object<TaskConfig>(
  {
    languageCode: languageCode8Schema,
    documentClassificationConfig: s.optional(s.lazy(() => documentClassificationConfigSchema)),
    entityRecognitionConfig: s.optional(s.lazy(() => entityRecognitionConfigSchema)),
    _keysMap: {
      languageCode: "LanguageCode",
      documentClassificationConfig: "DocumentClassificationConfig",
      entityRecognitionConfig: "EntityRecognitionConfig",
    },
  },
  { additionalProperties: s.json() },
);
