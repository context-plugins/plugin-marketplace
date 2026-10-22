import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Derivative = {
  /** The unique identifier of the derived resource. */
  id?: string;
  /** The transformation string that was applied. */
  transformation?: string;
  /** The unique signature of the transformation. */
  transformationSignature?: string;
  /** The secure URL for accessing the derived resource. */
  secureUrl?: string;
};

export const derivativeSchema: Schema<Derivative> = s.object<Derivative>({
  id: s.optional(s.string()),
  transformation: s.optional(s.string()),
  transformationSignature: s.optional(s.string()),
  secureUrl: s.optional(s.string()),
  _keysMap: {
    transformationSignature: "transformation_signature",
    secureUrl: "secure_url",
  },
});
