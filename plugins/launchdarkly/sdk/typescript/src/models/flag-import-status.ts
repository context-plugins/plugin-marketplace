import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusResponseSchema, type StatusResponse } from "./status-response.js";
import { status4Schema, type Status4 } from "./status4.js";

export type FlagImportStatus = {
  /** The current status of the import integrations related import job */
  status?: Status4;
  lastImport?: number;
  lastError?: number;
  errors?: StatusResponse[];
};

export const flagImportStatusSchema: Schema<FlagImportStatus> = s.object<FlagImportStatus>({
  status: s.optional(s.lazy(() => status4Schema)),
  lastImport: s.optional(s.int()),
  lastError: s.optional(s.int()),
  errors: s.optional(s.array(s.lazy(() => statusResponseSchema))),
});
