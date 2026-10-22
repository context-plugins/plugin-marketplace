import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";

export type DisplayableListFormat = {
  /** defines how to render this particular displayable list card */
  format?: Format;
};

export const displayableListFormatSchema: Schema<DisplayableListFormat> = s.object<DisplayableListFormat>({
  format: s.optional(s.lazy(() => formatSchema)),
});
