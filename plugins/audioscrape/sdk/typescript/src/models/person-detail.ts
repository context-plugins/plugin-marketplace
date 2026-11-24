import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personAppearanceSchema, type PersonAppearance } from "./person-appearance.js";

export type PersonDetail = {
  appearances: PersonAppearance[];
  description?: string | null;
  id: number;
  name: string;
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personDetailSchema: Schema<PersonDetail> = s.object<PersonDetail>(
  {
    appearances: s.array(s.lazy(() => personAppearanceSchema)),
    description: s.optionalNullable(s.string()),
    id: s.int(),
    name: s.string(),
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
