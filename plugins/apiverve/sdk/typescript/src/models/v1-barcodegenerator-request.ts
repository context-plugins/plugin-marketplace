import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1BarcodegeneratorRequest = {
  /** The data you want to generate a barcode from (string) */
  data: string;
  /** The type of barcode you want to generate */
  type: string;
  /** The color of the barcode (default: #000000) */
  lineColor?: string;
  /** The background color of the barcode (default: #ffffff) */
  backgroundColor?: string;
  /** Whether to display the value below the barcode (default: true) */
  displayValue?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1BarcodegeneratorRequestSchema: Schema<V1BarcodegeneratorRequest> =
  s.object<V1BarcodegeneratorRequest>(
    {
      data: s.string(),
      type: s.string(),
      lineColor: s.optional(s.string()),
      backgroundColor: s.optional(s.string()),
      displayValue: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
