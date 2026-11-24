import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  augmentedManifestsListItemSchema,
  type AugmentedManifestsListItem,
} from "./augmented-manifests-list-item.js";
import { dataFormat2Schema, type DataFormat2 } from "./data-format2.js";
import {
  entityRecognizerAnnotationsSchema,
  type EntityRecognizerAnnotations,
} from "./entity-recognizer-annotations.js";
import {
  entityRecognizerDocumentsSchema,
  type EntityRecognizerDocuments,
} from "./entity-recognizer-documents.js";
import {
  entityRecognizerEntityListSchema,
  type EntityRecognizerEntityList,
} from "./entity-recognizer-entity-list.js";
import { entityTypesListItemSchema, type EntityTypesListItem } from "./entity-types-list-item.js";

export type EntityRecognizerInputDataConfig = {
  /**
   * The format of your training data: COMPREHEND_CSV: A CSV file that supplements your training
   * documents. The CSV file contains information about the custom entities that your trained model
   * will detect. The required format of the file depends on whether you are providing annotations
   * or an entity list. If you use this value, you must provide your CSV file by using either the
   * Annotations or EntityList parameters. You must provide your training documents by using the
   * Documents parameter. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker
   * Ground Truth. This file is in JSON lin
   */
  dataFormat?: DataFormat2;
  /**
   * The entity types in the labeled training data that Amazon Comprehend uses to train the custom
   * entity recognizer. Any entity types that you don't specify are ignored. A maximum of 25 entity
   * types can be used at one time to train an entity recognizer. Entity types must not contain the
   * following invalid characters: \n (line break), \\n (escaped line break), \r (carriage return),
   * \\r (escaped carriage return), \t (tab), \\t (escaped tab), space, and , (comma).
   */
  entityTypes: EntityTypesListItem[];
  documents?: EntityRecognizerDocuments;
  annotations?: EntityRecognizerAnnotations;
  entityList?: EntityRecognizerEntityList;
  /**
   * A list of augmented manifest files that provide training data for your custom model. An
   * augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   * This parameter is required if you set DataFormat to AUGMENTED_MANIFEST.
   */
  augmentedManifests?: AugmentedManifestsListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerInputDataConfigSchema: Schema<EntityRecognizerInputDataConfig> =
  s.object<EntityRecognizerInputDataConfig>(
    {
      dataFormat: s.optional(s.lazy(() => dataFormat2Schema)),
      entityTypes: s.array(s.lazy(() => entityTypesListItemSchema)),
      documents: s.optional(s.lazy(() => entityRecognizerDocumentsSchema)),
      annotations: s.optional(s.lazy(() => entityRecognizerAnnotationsSchema)),
      entityList: s.optional(s.lazy(() => entityRecognizerEntityListSchema)),
      augmentedManifests: s.optional(s.array(s.lazy(() => augmentedManifestsListItemSchema))),
      _keysMap: {
        dataFormat: "DataFormat",
        entityTypes: "EntityTypes",
        documents: "Documents",
        annotations: "Annotations",
        entityList: "EntityList",
        augmentedManifests: "AugmentedManifests",
      },
    },
    { additionalProperties: s.json() },
  );
