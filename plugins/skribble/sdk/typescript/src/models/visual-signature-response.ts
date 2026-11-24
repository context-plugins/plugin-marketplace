import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  textSkribbleSignatureApiSchema,
  type TextSkribbleSignatureApi,
} from "./text-skribble-signature-api.js";
import { visualSignatureImageSchema, type VisualSignatureImage } from "./visual-signature-image.js";
import { visualSignaturePositionSchema, type VisualSignaturePosition } from "./visual-signature-position.js";
import {
  visualSignaturePosition1Schema,
  type VisualSignaturePosition1,
} from "./visual-signature-position1.js";

/** Visual signature placement information. */
export type VisualSignatureResponse = {
  /** Visual signature image. */
  image?: VisualSignatureImage;
  /** Position where the signature should appear. */
  position?: VisualSignaturePosition1;
  /** List of additional positions where the signature should appear. */
  positions?: VisualSignaturePosition[];
  /**
   * Name of the form field in which the signature is placed. If multiple fields of this name are
   * present in the document, all will be used. Takes precedence before positions.
   */
  formField?: string;
  /** Text displayed inside the form field. */
  text?: TextSkribbleSignatureApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const visualSignatureResponseSchema: Schema<VisualSignatureResponse> =
  s.object<VisualSignatureResponse>(
    {
      image: s.optional(s.lazy(() => visualSignatureImageSchema)),
      position: s.optional(s.lazy(() => visualSignaturePosition1Schema)),
      positions: s.optional(s.array(s.lazy(() => visualSignaturePositionSchema))),
      formField: s.optional(s.string()),
      text: s.optional(s.lazy(() => textSkribbleSignatureApiSchema)),
      _keysMap: {
        formField: "form_field",
      },
    },
    { additionalProperties: s.json() },
  );
