import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { retry1Schema, type Retry1 } from "./retry1.js";

export type Embedded91 = {
  retries?: Retry1[];
};

export const embedded91Schema: Schema<Embedded91> = s.object<Embedded91>({
  retries: s.optional(s.array(s.lazy(() => retry1Schema))),
});
