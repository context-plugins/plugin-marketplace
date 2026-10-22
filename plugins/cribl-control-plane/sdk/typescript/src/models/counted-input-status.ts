import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputStatusSchema, type InputStatus } from "./input-status.js";

export type CountedInputStatus = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: InputStatus[];
};

export const countedInputStatusSchema: Schema<CountedInputStatus> = s.object<CountedInputStatus>({
  count: s.int(),
  items: s.array(s.lazy(() => inputStatusSchema)),
});
