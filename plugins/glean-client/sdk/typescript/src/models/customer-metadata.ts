import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customDataValueSchema, type CustomDataValue } from "./custom-data-value.js";

export type CustomerMetadata = {
  /** The user visible id of the salesforce customer account. */
  datasourceId?: string;
  /** Custom fields specific to individual datasources */
  customData?: Record<string, CustomDataValue>;
};

export const customerMetadataSchema: Schema<CustomerMetadata> = s.object<CustomerMetadata>({
  datasourceId: s.optional(s.string()),
  customData: s.optional(
    s.record(
      s.string(),
      s.lazy(() => customDataValueSchema),
    ),
  ),
});
