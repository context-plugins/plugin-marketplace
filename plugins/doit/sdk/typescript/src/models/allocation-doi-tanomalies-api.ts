import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AllocationDoiTAnomaliesApi = {
  /** Allocation ID. Use it with the Allocations API to read the allocation. */
  id: string;
  /** Allocation name. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationDoiTAnomaliesApiSchema: Schema<AllocationDoiTAnomaliesApi> =
  s.object<AllocationDoiTAnomaliesApi>(
    {
      id: s.string(),
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
