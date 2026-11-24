import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visualSignatureImageSchema, type VisualSignatureImage } from "./visual-signature-image.js";
import { visualSignaturePositionSchema, type VisualSignaturePosition } from "./visual-signature-position.js";

/** Use a single explicit position. */
export type SinglePosition = {
  position: VisualSignaturePosition;
  /** Visual signature image. */
  image?: VisualSignatureImage;
  /** Must not be provided when position is used. */
  positions?: Record<string, unknown>;
  /** Must not be provided when position is used. */
  formField?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const singlePositionSchema: Schema<SinglePosition> = s.object<SinglePosition>(
  {
    position: visualSignaturePositionSchema,
    image: s.optional(s.lazy(() => visualSignatureImageSchema)),
    positions: s.optional(s.record(s.string(), s.unknown())),
    formField: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      formField: "form_field",
    },
  },
  { additionalProperties: s.json() },
);
