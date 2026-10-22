import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputSplunkHecSchema, type InputSplunkHec } from "./input-splunk-hec.js";

export type CountedInputSplunkHec = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: InputSplunkHec[];
};

export const countedInputSplunkHecSchema: Schema<CountedInputSplunkHec> = s.object<CountedInputSplunkHec>({
  count: s.int(),
  items: s.array(s.lazy(() => inputSplunkHecSchema)),
});
