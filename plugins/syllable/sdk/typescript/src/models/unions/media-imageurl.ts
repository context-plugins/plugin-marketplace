import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { displayValueSourceSchema, type DisplayValueSource } from "../display-value-source.js";

export type MediaImageurl = string | number | boolean | DisplayValueSource;

export const mediaImageurlSchema: Schema<MediaImageurl> = s.of<MediaImageurl>(
  s.union([s.string(), s.int(), s.float64(), s.boolean(), s.lazy(() => displayValueSourceSchema)]),
);
