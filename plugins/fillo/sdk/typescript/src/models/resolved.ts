import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where an upload would actually land right now — including Fillo's short-lived transit staging.
 * null means uploads are blocked.
 */
export const Resolved = {
  Gdrive: "gdrive",
  S3: "s3",
  Box: "box",
  Transit: "transit",
} as const;
export type Resolved = (typeof Resolved)[keyof typeof Resolved] | (string & {});

export const resolvedSchema: EnumSchema<Resolved> = s.enumOf<Resolved>(Resolved);
