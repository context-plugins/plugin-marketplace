import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DownloadLink = {
  /** CSV format */
  csv: string;
  /** PDF format */
  pdf: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const downloadLinkSchema: Schema<DownloadLink> = s.object<DownloadLink>(
  {
    csv: s.string(),
    pdf: s.string(),
  },
  { additionalProperties: s.json() },
);
