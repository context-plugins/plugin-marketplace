import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataFormatSchema, type DataFormat } from "./data-format.js";
import {
  datasetAugmentedManifestsListItemSchema,
  type DatasetAugmentedManifestsListItem,
} from "./dataset-augmented-manifests-list-item.js";
import {
  datasetDocumentClassifierInputDataConfigSchema,
  type DatasetDocumentClassifierInputDataConfig,
} from "./dataset-document-classifier-input-data-config.js";
import {
  datasetEntityRecognizerInputDataConfigSchema,
  type DatasetEntityRecognizerInputDataConfig,
} from "./dataset-entity-recognizer-input-data-config.js";

export type DatasetInputDataConfig = {
  /**
   * A list of augmented manifest files that provide training data for your custom model. An
   * augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   */
  augmentedManifests?: DatasetAugmentedManifestsListItem[];
  /**
   * COMPREHEND_CSV: The data format is a two-column CSV file, where the first column contains
   * labels and the second column contains documents. AUGMENTED_MANIFEST: The data format
   */
  dataFormat?: DataFormat;
  documentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig;
  entityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetInputDataConfigSchema: Schema<DatasetInputDataConfig> = s.object<DatasetInputDataConfig>(
  {
    augmentedManifests: s.optional(s.array(s.lazy(() => datasetAugmentedManifestsListItemSchema))),
    dataFormat: s.optional(s.lazy(() => dataFormatSchema)),
    documentClassifierInputDataConfig: s.optional(
      s.lazy(() => datasetDocumentClassifierInputDataConfigSchema),
    ),
    entityRecognizerInputDataConfig: s.optional(s.lazy(() => datasetEntityRecognizerInputDataConfigSchema)),
    _keysMap: {
      augmentedManifests: "AugmentedManifests",
      dataFormat: "DataFormat",
      documentClassifierInputDataConfig: "DocumentClassifierInputDataConfig",
      entityRecognizerInputDataConfig: "EntityRecognizerInputDataConfig",
    },
  },
  { additionalProperties: s.json() },
);
