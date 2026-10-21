import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertyDefinitionSchema, type PropertyDefinition } from "./property-definition.js";

/** Schema for custom metadata containing metadata key definitions */
export type CustomMetadataSchema = {
  /** Array of metadata key definitions */
  metadataKeys: PropertyDefinition[];
};

export const customMetadataSchemaSchema: Schema<CustomMetadataSchema> = s.object<CustomMetadataSchema>({
  metadataKeys: s.array(s.lazy(() => propertyDefinitionSchema)),
});
