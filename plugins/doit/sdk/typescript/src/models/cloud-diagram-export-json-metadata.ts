import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata included in a diagram JSON export. */
export type CloudDiagramExportJsonMetadata = {
  /** Email of the user who triggered the export. */
  user: string;
  /** ISO 8601 timestamp of the export. */
  date: Date;
  /** Export format version. */
  version: string;
  /**
   * Map of component ID to display label for external connections referenced by cross-diagram
   * links.
   */
  connections?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramExportJsonMetadataSchema: Schema<CloudDiagramExportJsonMetadata> =
  s.object<CloudDiagramExportJsonMetadata>(
    {
      user: s.string(),
      date: s.dateTime(),
      version: s.string(),
      connections: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
