import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinDocumentSchema, type PinDocument } from "./pin-document.js";

export type GetPinResponse = {
  pin?: PinDocument;
};

export const getPinResponseSchema: Schema<GetPinResponse> = s.object<GetPinResponse>({
  pin: s.optional(s.lazy(() => pinDocumentSchema)),
});
