import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type CustomFlowHeading = {
  /** @default "custom_flow_heading" */
  name?: "custom_flow_heading";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFlowHeadingSchema: Schema<CustomFlowHeading> = s.object<CustomFlowHeading>(
  {
    name: s.defaulted(s.literal("custom_flow_heading"), "custom_flow_heading"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
