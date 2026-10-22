import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSchema, type Transfer } from "./transfer.js";

export type Embedded2 = {
  transfers?: Transfer[];
};

export const embedded2Schema: Schema<Embedded2> = s.object<Embedded2>({
  transfers: s.optional(s.array(s.lazy(() => transferSchema))),
});
