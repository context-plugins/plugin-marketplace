import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinDocumentSchema, type PinDocument } from "./pin-document.js";

export type ListPinsResponse = {
  /** List of pinned documents. */
  pins: PinDocument[];
};

export const listPinsResponseSchema: Schema<ListPinsResponse> = s.object<ListPinsResponse>({
  pins: s.array(s.lazy(() => pinDocumentSchema)),
});
