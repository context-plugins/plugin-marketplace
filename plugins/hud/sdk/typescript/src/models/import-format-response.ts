import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";

export type ImportFormatResponse = {
  /** @default "harbor" */
  format?: "harbor";
  title: string;
  description?: Description;
  /** The largest bundle an import of this format takes */
  maxInputBytes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importFormatResponseSchema: Schema<ImportFormatResponse> = s.object<ImportFormatResponse>(
  {
    format: s.defaulted(s.literal("harbor"), "harbor"),
    title: s.string(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    maxInputBytes: s.int(),
    _keysMap: {
      maxInputBytes: "max_input_bytes",
    },
  },
  { additionalProperties: s.json() },
);
