import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptPropertiesSchema, type PromptProperties } from "../prompt-properties.js";

/** The fields to include in the response */
export type Fields15 = PromptProperties[];

export const fields15Schema: Schema<Fields15> = s.of<Fields15>(
  s.union([s.array(s.lazy(() => promptPropertiesSchema))]),
);
