import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SectionableBlock12 = {
  /** Discriminator value: content_break @default "content_break" */
  type?: "content_break";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionableBlock12Schema: Schema<SectionableBlock12> = s.object<SectionableBlock12>(
  {
    type: s.defaulted(s.literal("content_break"), "content_break"),
  },
  { additionalProperties: s.json() },
);
