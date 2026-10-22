import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customMessagePropertiesSchema, type CustomMessageProperties } from "../custom-message-properties.js";

/** The fields to include in the response */
export type Fields14 = CustomMessageProperties[];

export const fields14Schema: Schema<Fields14> = s.of<Fields14>(
  s.union([s.array(s.lazy(() => customMessagePropertiesSchema))]),
);
