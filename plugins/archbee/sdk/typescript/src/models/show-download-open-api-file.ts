import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API tree.
 */
export const ShowDownloadOpenApiFile = {
  True: "true",
  False: "false",
} as const;
export type ShowDownloadOpenApiFile =
  | (typeof ShowDownloadOpenApiFile)[keyof typeof ShowDownloadOpenApiFile]
  | (string & {});

export const showDownloadOpenApiFileSchema: EnumSchema<ShowDownloadOpenApiFile> =
  s.enumOf<ShowDownloadOpenApiFile>(ShowDownloadOpenApiFile);
