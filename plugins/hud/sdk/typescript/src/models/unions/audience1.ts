import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { audienceSchema, type Audience } from "../audience.js";

export type Audience1 = Audience[];

export const audience1Schema: Schema<Audience1> = s.of<Audience1>(
  s.union([s.array(s.lazy(() => audienceSchema))]),
);
