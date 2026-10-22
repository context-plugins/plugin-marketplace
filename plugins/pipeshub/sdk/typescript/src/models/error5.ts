import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error5 = {
  /** @default "HTTP_BAD_REQUEST" */
  code?: "HTTP_BAD_REQUEST";
  message: string;
};

export const error5Schema: Schema<Error5> = s.object<Error5>({
  code: s.defaulted(s.literal("HTTP_BAD_REQUEST"), "HTTP_BAD_REQUEST"),
  message: s.string(),
});
