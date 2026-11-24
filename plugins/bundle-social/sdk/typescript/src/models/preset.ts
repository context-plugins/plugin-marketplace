import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type Preset = {
  /** Value to pass as data.FACEBOOK.textFormatPresetId when creating a post. */
  id: string;
  /** Name of the background, for showing in a picker. */
  label: string;
  /** Whether the background is a flat color, a gradient, or an illustration. */
  kind: Kind;
  /** CSS color or gradient the background renders. Absent for illustrations. */
  color?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const presetSchema: Schema<Preset> = s.object<Preset>(
  {
    id: s.string(),
    label: s.string(),
    kind: kindSchema,
    color: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
