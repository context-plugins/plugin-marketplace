import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sortedLinksSchema, type SortedLinks } from "../sorted-links.js";
import { topLinksAndQrCodesSchema, type TopLinksAndQrCodes } from "../top-links-and-qr-codes.js";

export type GroupsCodesScansTopResponse = SortedLinks | TopLinksAndQrCodes;

export const groupsCodesScansTopResponseSchema: Schema<GroupsCodesScansTopResponse> =
  s.of<GroupsCodesScansTopResponse>(
    s.union([s.lazy(() => sortedLinksSchema), s.lazy(() => topLinksAndQrCodesSchema)]),
  );
