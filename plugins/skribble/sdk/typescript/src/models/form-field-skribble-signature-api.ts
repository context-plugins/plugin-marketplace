import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visualSignatureImageSchema, type VisualSignatureImage } from "./visual-signature-image.js";

/** Use a form field only. */
export type FormFieldSkribbleSignatureApi = {
  /**
   * Name of the form field in which the signature is placed. If multiple fields of this name are
   * present in the document, all will be used.
   */
  formField: string;
  /** Visual signature image. */
  image?: VisualSignatureImage;
  /** Must not be provided when form_field is used. */
  position?: Record<string, unknown>;
  /** Must not be provided when form_field is used. */
  positions?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formFieldSkribbleSignatureApiSchema: Schema<FormFieldSkribbleSignatureApi> =
  s.object<FormFieldSkribbleSignatureApi>(
    {
      formField: s.string(),
      image: s.optional(s.lazy(() => visualSignatureImageSchema)),
      position: s.optional(s.record(s.string(), s.unknown())),
      positions: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        formField: "form_field",
      },
    },
    { additionalProperties: s.json() },
  );
