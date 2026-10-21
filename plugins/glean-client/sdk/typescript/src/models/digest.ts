import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { digestSectionSchema, type DigestSection } from "./digest-section.js";

export type Digest = {
  /** Identifier for the podcast file generated from this digest content. */
  podcastFileId?: string;
  /** Duration of the podcast file in seconds. */
  podcastDuration?: number;
  /**
   * The date this digest covers, in YYYY-MM-DD format. Represents the specific day for which the
   * digest content and updates were compiled. This can be empty if the digest is not yet available.
   */
  digestDate?: string;
  /** Array of digest sections from which the podcast was created. */
  sections?: DigestSection[];
};

export const digestSchema: Schema<Digest> = s.object<Digest>({
  podcastFileId: s.optional(s.string()),
  podcastDuration: s.optional(s.float64()),
  digestDate: s.optional(s.string()),
  sections: s.optional(s.array(s.lazy(() => digestSectionSchema))),
});
