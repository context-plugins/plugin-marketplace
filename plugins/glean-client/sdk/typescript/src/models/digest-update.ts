import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateTypeSchema, type UpdateType } from "./update-type.js";

export type DigestUpdate = {
  /** List of URLs for similar updates that are grouped together and rendered as a single update. */
  urls?: string[];
  /** URL link to the content or document. */
  url?: string;
  /** Title or headline of the update. */
  title?: string;
  /** Name or identifier of the data source (e.g., slack, confluence, etc.). */
  datasource?: string;
  /** Brief summary or description of the update content. */
  summary?: string;
  /** Optional type classification for the update. */
  type?: UpdateType;
};

export const digestUpdateSchema: Schema<DigestUpdate> = s.object<DigestUpdate>({
  urls: s.optional(s.array(s.string())),
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  datasource: s.optional(s.string()),
  summary: s.optional(s.string()),
  type: s.optional(s.lazy(() => updateTypeSchema)),
});
