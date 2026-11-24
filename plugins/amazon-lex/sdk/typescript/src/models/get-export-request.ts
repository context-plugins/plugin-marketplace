import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportTypeSchema, type ExportType } from "./export-type.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";

export type GetExportRequest = {
  /** The name of the bot to export. */
  name: string;
  /** The version of the bot to export. */
  version: string;
  /** The type of resource to export. */
  resourceType: ResourceType;
  /** The format of the exported data. */
  exportType: ExportType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getExportRequestSchema: Schema<GetExportRequest> = s.object<GetExportRequest>(
  {
    name: s.string(),
    version: s.string(),
    resourceType: resourceTypeSchema,
    exportType: exportTypeSchema,
  },
  { additionalProperties: s.json() },
);
