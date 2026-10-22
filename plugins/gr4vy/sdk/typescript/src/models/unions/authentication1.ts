import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { authentication2Schema, type Authentication2 } from "./authentication2.js";

/** Optional authentication configuration for webhook requests. */
export type Authentication1 = Authentication2;

export const authentication1Schema: Schema<Authentication1> = s.of<Authentication1>(
  s.union([s.lazy(() => authentication2Schema)]),
);
