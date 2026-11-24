import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";

/** Request body for updating a label. */
export type UpdateLabelRequest = {
  /** The name of the label. */
  name?: string | null;
  /** The color of the label. */
  color?: Color | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateLabelRequestSchema: Schema<UpdateLabelRequest> = s.object<UpdateLabelRequest>(
  {
    name: s.optionalNullable(s.string()),
    color: s.optionalNullable(s.lazy(() => colorSchema)),
  },
  { additionalProperties: s.json() },
);
