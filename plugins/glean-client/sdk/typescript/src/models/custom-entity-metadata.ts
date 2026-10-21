import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customDataValueSchema, type CustomDataValue } from "./custom-data-value.js";

export type CustomEntityMetadata = {
  /** Custom fields specific to individual datasources */
  customData?: Record<string, CustomDataValue>;
};

export const customEntityMetadataSchema: Schema<CustomEntityMetadata> = s.object<CustomEntityMetadata>({
  customData: s.optional(
    s.record(
      s.string(),
      s.lazy(() => customDataValueSchema),
    ),
  ),
});
