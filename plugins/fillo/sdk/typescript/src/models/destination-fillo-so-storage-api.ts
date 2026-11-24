import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The destination pinned on the form. `none` means the form follows the workspace default. */
export const DestinationFilloSoStorageApi = {
  Gdrive: "gdrive",
  Box: "box",
  S3: "s3",
  R2: "r2",
  None: "none",
} as const;
export type DestinationFilloSoStorageApi =
  | (typeof DestinationFilloSoStorageApi)[keyof typeof DestinationFilloSoStorageApi]
  | (string & {});

export const destinationFilloSoStorageApiSchema: EnumSchema<DestinationFilloSoStorageApi> =
  s.enumOf<DestinationFilloSoStorageApi>(DestinationFilloSoStorageApi);
