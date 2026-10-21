import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  directoryExtensionNumberSchema,
  type DirectoryExtensionNumber,
} from "../directory-extension-number.js";

/** Directory extension numbers. */
export type Numbers = DirectoryExtensionNumber[];

export const numbersSchema: Schema<Numbers> = s.of<Numbers>(
  s.union([s.array(s.lazy(() => directoryExtensionNumberSchema))]),
);
