import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The field to order the QR codes. The default is `createdAt`, and the order of sorting is always
 * descending.
 */
export const SortCodeqrIoQrCodesApi = {
  CreatedAt: "createdAt",
  Scans: "scans",
  LastClicked: "lastClicked",
} as const;
export type SortCodeqrIoQrCodesApi =
  | (typeof SortCodeqrIoQrCodesApi)[keyof typeof SortCodeqrIoQrCodesApi]
  | (string & {});

export const sortCodeqrIoQrCodesApiSchema: EnumSchema<SortCodeqrIoQrCodesApi> =
  s.enumOf<SortCodeqrIoQrCodesApi>(SortCodeqrIoQrCodesApi);
