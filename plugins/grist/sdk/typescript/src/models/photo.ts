import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type Photo = {
  /** The picture of the user */
  value?: string;
  /** Whether this is the primary picture */
  primary?: boolean;
  /** The picture type. Currently, we only offer pictures of type "photo". */
  type?: Type3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const photoSchema: Schema<Photo> = s.object<Photo>(
  {
    value: s.optional(s.string()),
    primary: s.optional(s.boolean()),
    type: s.optional(s.lazy(() => type3Schema)),
  },
  { additionalProperties: s.json() },
);
