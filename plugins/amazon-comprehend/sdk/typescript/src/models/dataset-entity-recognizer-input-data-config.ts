import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetEntityRecognizerAnnotationsSchema,
  type DatasetEntityRecognizerAnnotations,
} from "./dataset-entity-recognizer-annotations.js";
import {
  datasetEntityRecognizerDocumentsSchema,
  type DatasetEntityRecognizerDocuments,
} from "./dataset-entity-recognizer-documents.js";
import {
  datasetEntityRecognizerEntityListSchema,
  type DatasetEntityRecognizerEntityList,
} from "./dataset-entity-recognizer-entity-list.js";

export type DatasetEntityRecognizerInputDataConfig = {
  annotations?: DatasetEntityRecognizerAnnotations;
  documents: DatasetEntityRecognizerDocuments;
  entityList?: DatasetEntityRecognizerEntityList;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetEntityRecognizerInputDataConfigSchema: Schema<DatasetEntityRecognizerInputDataConfig> =
  s.object<DatasetEntityRecognizerInputDataConfig>(
    {
      annotations: s.optional(s.lazy(() => datasetEntityRecognizerAnnotationsSchema)),
      documents: datasetEntityRecognizerDocumentsSchema,
      entityList: s.optional(s.lazy(() => datasetEntityRecognizerEntityListSchema)),
      _keysMap: {
        annotations: "Annotations",
        documents: "Documents",
        entityList: "EntityList",
      },
    },
    { additionalProperties: s.json() },
  );
