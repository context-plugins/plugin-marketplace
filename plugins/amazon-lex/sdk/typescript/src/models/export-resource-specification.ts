import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botExportSpecificationSchema, type BotExportSpecification } from "./bot-export-specification.js";
import {
  botLocaleExportSpecificationSchema,
  type BotLocaleExportSpecification,
} from "./bot-locale-export-specification.js";
import {
  customVocabularyExportSpecificationSchema,
  type CustomVocabularyExportSpecification,
} from "./custom-vocabulary-export-specification.js";
import {
  testSetExportSpecificationSchema,
  type TestSetExportSpecification,
} from "./test-set-export-specification.js";

export type ExportResourceSpecification = {
  botExportSpecification?: BotExportSpecification;
  botLocaleExportSpecification?: BotLocaleExportSpecification;
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
  testSetExportSpecification?: TestSetExportSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportResourceSpecificationSchema: Schema<ExportResourceSpecification> =
  s.object<ExportResourceSpecification>(
    {
      botExportSpecification: s.optional(s.lazy(() => botExportSpecificationSchema)),
      botLocaleExportSpecification: s.optional(s.lazy(() => botLocaleExportSpecificationSchema)),
      customVocabularyExportSpecification: s.optional(
        s.lazy(() => customVocabularyExportSpecificationSchema),
      ),
      testSetExportSpecification: s.optional(s.lazy(() => testSetExportSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
