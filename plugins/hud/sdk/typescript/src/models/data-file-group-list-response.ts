import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataFileGroupSchema, type DataFileGroup } from "./data-file-group.js";

export type DataFileGroupListResponse = {
  groups: DataFileGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileGroupListResponseSchema: Schema<DataFileGroupListResponse> =
  s.object<DataFileGroupListResponse>(
    {
      groups: s.array(s.lazy(() => dataFileGroupSchema)),
    },
    { additionalProperties: s.json() },
  );
