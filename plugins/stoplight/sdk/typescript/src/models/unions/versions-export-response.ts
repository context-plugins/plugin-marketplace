import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The specification. Returned as a string when YAML, object when JSON. */
export type VersionsExportResponse = Record<string, unknown> | string;

export const versionsExportResponseSchema: Schema<VersionsExportResponse> = s.of<VersionsExportResponse>(
  s.union([s.record(s.string(), s.unknown()), s.string()]),
);
