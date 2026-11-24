import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";

/** Request body for creating a label. */
export type CreateLabelRequest = {
  /** The name of the label. */
  name: string;
  /** The color of the label. */
  color: Color;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createLabelRequestSchema: Schema<CreateLabelRequest> = s.object<CreateLabelRequest>(
  {
    name: s.string(),
    color: colorSchema,
  },
  { additionalProperties: s.json() },
);
