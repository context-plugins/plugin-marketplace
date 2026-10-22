import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import { detailsSchema, type Details } from "./details.js";

/** 409 body returned when a Local FS connector cannot sync because of its owner device. */
export type LocalFsDesktopRefusal = {
  success: boolean;
  code: Code;
  message: string;
  details: Details;
};

export const localFsDesktopRefusalSchema: Schema<LocalFsDesktopRefusal> = s.object<LocalFsDesktopRefusal>({
  success: s.boolean(),
  code: codeSchema,
  message: s.string(),
  details: detailsSchema,
});
