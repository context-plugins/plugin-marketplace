import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockSchema, type Block } from "./block.js";
import { documentMetadataSchema, type DocumentMetadata } from "./document-metadata.js";
import { documentTypeListItemSchema, type DocumentTypeListItem } from "./document-type-list-item.js";
import { entitySchema, type Entity } from "./entity.js";
import { errorsListItemSchema, type ErrorsListItem } from "./errors-list-item.js";

export type DetectEntitiesResponse = {
  /**
   * A collection of entities identified in the input text. For each entity, the response provides
   * the entity text, entity type, where the entity text begins and ends, and the level of
   * confidence that Amazon Comprehend has in the detection. If your request uses a custom entity
   * recognition model, Amazon Comprehend detects the entities that the model is trained to
   * recognize. Otherwise, it detects the default entity types. For a list of default entity types,
   * see Entities in the Comprehend Developer Guide.
   */
  entities?: Entity[];
  documentMetadata?: DocumentMetadata;
  /**
   * The document type for each page in the input document. This field is present in the response
   * only if your request used the Byte parameter.
   */
  documentType?: DocumentTypeListItem[];
  /**
   * Information about each block of text in the input document. Blocks are nested. A page block
   * contains a block for each line of text, which contains a block for each word. The Block content
   * for a Word input document does not include a Geometry field. The Block field is not present in
   * the response for plain-text inputs.
   */
  blocks?: Block[];
  /**
   * Page-level errors that the system detected while processing the input document. The field is
   * empty if the system encountered no errors.
   */
  errors?: ErrorsListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectEntitiesResponseSchema: Schema<DetectEntitiesResponse> = s.object<DetectEntitiesResponse>(
  {
    entities: s.optional(s.array(s.lazy(() => entitySchema))),
    documentMetadata: s.optional(s.lazy(() => documentMetadataSchema)),
    documentType: s.optional(s.array(s.lazy(() => documentTypeListItemSchema))),
    blocks: s.optional(s.array(s.lazy(() => blockSchema))),
    errors: s.optional(s.array(s.lazy(() => errorsListItemSchema))),
    _keysMap: {
      entities: "Entities",
      documentMetadata: "DocumentMetadata",
      documentType: "DocumentType",
      blocks: "Blocks",
      errors: "Errors",
    },
  },
  { additionalProperties: s.json() },
);
