import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numbersSchema, type Numbers } from "./unions/numbers.js";

export type DirectoryExtension = {
  /** Directory extension name */
  name: string;
  /** Directory extension numbers. */
  numbers?: Numbers;
};

export const directoryExtensionSchema: Schema<DirectoryExtension> = s.object<DirectoryExtension>({
  name: s.string(),
  numbers: s.optional(s.lazy(() => numbersSchema)),
});
