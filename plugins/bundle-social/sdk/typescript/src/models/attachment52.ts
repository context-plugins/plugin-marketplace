import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type81Schema, type Type81 } from "./type81.js";

export type Attachment52 = {
  type: Type81;
  url?: string | null;
  externalId?: string | null;
  mimeType?: string | null;
  name?: string | null;
  captionTrackUrl?: string | null;
  captionLanguage?: string | null;
  captionLabel?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachment52Schema: Schema<Attachment52> = s.object<Attachment52>(
  {
    type: type81Schema,
    url: s.optionalNullable(s.string()),
    externalId: s.optionalNullable(s.string()),
    mimeType: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    captionTrackUrl: s.optionalNullable(s.string()),
    captionLanguage: s.optionalNullable(s.string()),
    captionLabel: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
