import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customPropertySchema, type CustomProperty } from "./custom-property.js";

/** Request body for adding or updating custom metadata on a document */
export type CustomMetadataPutRequest = {
  /** Array of custom metadata key-value pairs */
  customMetadata: CustomProperty[];
};

export const customMetadataPutRequestSchema: Schema<CustomMetadataPutRequest> =
  s.object<CustomMetadataPutRequest>({
    customMetadata: s.array(s.lazy(() => customPropertySchema)),
  });
