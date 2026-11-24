import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visualSignatureImageSchema, type VisualSignatureImage } from "./visual-signature-image.js";
import { visualSignaturePositionSchema, type VisualSignaturePosition } from "./visual-signature-position.js";

/** Use multiple explicit positions. */
export type MultiplePositions = {
  positions: VisualSignaturePosition[];
  /** Visual signature image. */
  image?: VisualSignatureImage;
  /** Must not be provided when positions are used. */
  position?: Record<string, unknown>;
  /** Must not be provided when positions are used. */
  formField?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiplePositionsSchema: Schema<MultiplePositions> = s.object<MultiplePositions>(
  {
    positions: s.array(s.lazy(() => visualSignaturePositionSchema)),
    image: s.optional(s.lazy(() => visualSignatureImageSchema)),
    position: s.optional(s.record(s.string(), s.unknown())),
    formField: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      formField: "form_field",
    },
  },
  { additionalProperties: s.json() },
);
