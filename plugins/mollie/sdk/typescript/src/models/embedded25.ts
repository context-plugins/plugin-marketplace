import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityCaptureSchema, type ListEntityCapture } from "./list-entity-capture.js";

export type Embedded25 = {
  /** An array of capture objects. */
  captures: ListEntityCapture[];
};

export const embedded25Schema: Schema<Embedded25> = s.object<Embedded25>({
  captures: s.array(s.lazy(() => listEntityCaptureSchema)),
});
