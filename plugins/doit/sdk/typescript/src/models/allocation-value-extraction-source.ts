import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeDoiTAllocationsApiSchema, type TypeDoiTAllocationsApi } from "./type-doi-tallocations-api.js";

export type AllocationValueExtractionSource = {
  /**
   * The dimension type to read the value from. Label-map types (label, tag, project_label,
   * system_label, gke_label) extract the value of the given key; "fixed" extracts a raw table
   * dimension (for example project_id, service_description, region). Derived dimensions such as
   * credits are not extractable.
   */
  type: TypeDoiTAllocationsApi;
  /** The label/tag key, or the fixed dimension ID, whose value is extracted. */
  key: string;
  /** Optional cloud providers this source applies to. */
  providers?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationValueExtractionSourceSchema: Schema<AllocationValueExtractionSource> =
  s.object<AllocationValueExtractionSource>(
    {
      type: typeDoiTAllocationsApiSchema,
      key: s.string(),
      providers: s.optionalNullable(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
