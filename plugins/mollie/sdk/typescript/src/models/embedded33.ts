import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listMandateResponseSchema, type ListMandateResponse } from "./list-mandate-response.js";

export type Embedded33 = {
  /** An array of mandate objects. */
  mandates: ListMandateResponse[];
};

export const embedded33Schema: Schema<Embedded33> = s.object<Embedded33>({
  mandates: s.array(s.lazy(() => listMandateResponseSchema)),
});
