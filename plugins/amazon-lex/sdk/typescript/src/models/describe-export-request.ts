import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeExportRequest = {
  /** The unique identifier of the export to describe. */
  exportId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeExportRequestSchema: Schema<DescribeExportRequest> = s.object<DescribeExportRequest>(
  {
    exportId: s.string(),
  },
  { additionalProperties: s.json() },
);
