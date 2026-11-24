import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows whether content identification was enabled for your transcription. */
export const ContentIdentificationType2 = {
  Pii: "PII",
} as const;
export type ContentIdentificationType2 =
  | (typeof ContentIdentificationType2)[keyof typeof ContentIdentificationType2]
  | (string & {});

export const contentIdentificationType2Schema: EnumSchema<ContentIdentificationType2> =
  s.enumOf<ContentIdentificationType2>(ContentIdentificationType2);
