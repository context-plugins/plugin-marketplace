import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorLocation2Schema, type ErrorLocation2 } from "./error-location2.js";
import { pointerSchema, type Pointer } from "./unions/pointer.js";

export type ErrorDetail = {
  /** The part of the request where the property can be found that caused the error. */
  location: ErrorLocation2;
  /** A JSON pointer for the particular property that caused the error. */
  pointer: Pointer;
  /** A human-readdable explanation of the error. */
  message: string;
  /** The type of error that was raised for this property. */
  type: string;
};

export const errorDetailSchema: Schema<ErrorDetail> = s.object<ErrorDetail>({
  location: errorLocation2Schema,
  pointer: pointerSchema,
  message: s.string(),
  type: s.string(),
});
