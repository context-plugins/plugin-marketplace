import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usedStorageSchema, type UsedStorage } from "./used-storage.js";

export type EnvironmentsUsedstorageResponse = {
  value?: UsedStorage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentsUsedstorageResponseSchema: Schema<EnvironmentsUsedstorageResponse> =
  s.object<EnvironmentsUsedstorageResponse>(
    {
      value: s.optional(s.array(s.lazy(() => usedStorageSchema))),
    },
    { additionalProperties: s.json() },
  );
