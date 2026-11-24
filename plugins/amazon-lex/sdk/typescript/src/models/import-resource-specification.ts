import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botImportSpecificationSchema, type BotImportSpecification } from "./bot-import-specification.js";
import {
  botLocaleImportSpecificationSchema,
  type BotLocaleImportSpecification,
} from "./bot-locale-import-specification.js";
import {
  customVocabularyImportSpecificationSchema,
  type CustomVocabularyImportSpecification,
} from "./custom-vocabulary-import-specification.js";
import {
  testSetImportResourceSpecificationSchema,
  type TestSetImportResourceSpecification,
} from "./test-set-import-resource-specification.js";

export type ImportResourceSpecification = {
  botImportSpecification?: BotImportSpecification;
  botLocaleImportSpecification?: BotLocaleImportSpecification;
  customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
  testSetImportResourceSpecification?: TestSetImportResourceSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importResourceSpecificationSchema: Schema<ImportResourceSpecification> =
  s.object<ImportResourceSpecification>(
    {
      botImportSpecification: s.optional(s.lazy(() => botImportSpecificationSchema)),
      botLocaleImportSpecification: s.optional(s.lazy(() => botLocaleImportSpecificationSchema)),
      customVocabularyImportSpecification: s.optional(
        s.lazy(() => customVocabularyImportSpecificationSchema),
      ),
      testSetImportResourceSpecification: s.optional(s.lazy(() => testSetImportResourceSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
