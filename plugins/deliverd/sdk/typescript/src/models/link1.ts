import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Link1 = {
  label: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const link1Schema: Schema<Link1> = s.object<Link1>(
  {
    label: s.string(),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
