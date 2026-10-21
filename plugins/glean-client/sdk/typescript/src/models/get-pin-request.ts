import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetPinRequest = {
  /** The opaque id of the pin to be fetched. */
  id?: string;
};

export const getPinRequestSchema: Schema<GetPinRequest> = s.object<GetPinRequest>({
  id: s.optional(s.string()),
});
