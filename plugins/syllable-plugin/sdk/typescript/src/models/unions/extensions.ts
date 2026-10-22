import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { directoryExtensionSchema, type DirectoryExtension } from "../directory-extension.js";

/** List of extensions for the directory member */
export type Extensions = DirectoryExtension[];

export const extensionsSchema: Schema<Extensions> = s.of<Extensions>(
  s.union([s.array(s.lazy(() => directoryExtensionSchema))]),
);
