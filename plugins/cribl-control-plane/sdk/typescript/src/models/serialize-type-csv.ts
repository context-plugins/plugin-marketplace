import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type12Schema, type Type12 } from "./type12.js";

export type SerializeTypeCsv = {
  /** Data output format. */
  type?: Type12;
};

export const serializeTypeCsvSchema: Schema<SerializeTypeCsv> = s.object<SerializeTypeCsv>({
  type: s.optional(s.lazy(() => type12Schema)),
});
