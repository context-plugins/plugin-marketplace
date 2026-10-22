import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { displayValueSourceSchema, type DisplayValueSource } from "../display-value-source.js";

export type ContentAvatarimageurl = string | number | boolean | DisplayValueSource;

export const contentAvatarimageurlSchema: Schema<ContentAvatarimageurl> = s.of<ContentAvatarimageurl>(
  s.union([s.string(), s.int(), s.float64(), s.boolean(), s.lazy(() => displayValueSourceSchema)]),
);
