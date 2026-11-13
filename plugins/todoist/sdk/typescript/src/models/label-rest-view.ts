import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LabelRestView = {
  /** String ID of the label. */
  id: string;
  /** Label name. */
  name: string;
  /** Label color name. */
  color: string;
  /** Position of the label in the label list, or `null` when no explicit order is set. */
  order: number | null;
  /** Whether the label is marked as a favorite. */
  isFavorite: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelRestViewSchema: Schema<LabelRestView> = s.object<LabelRestView>(
  {
    id: s.string(),
    name: s.string(),
    color: s.string(),
    order: s.nullable(s.int()),
    isFavorite: s.boolean(),
    _keysMap: {
      isFavorite: "is_favorite",
    },
  },
  { additionalProperties: s.json() },
);
