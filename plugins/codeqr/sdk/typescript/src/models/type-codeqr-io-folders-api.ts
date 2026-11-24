import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeCodeqrIoFoldersApi = {
  Default: "default",
  Templates: "templates",
} as const;
export type TypeCodeqrIoFoldersApi =
  | (typeof TypeCodeqrIoFoldersApi)[keyof typeof TypeCodeqrIoFoldersApi]
  | (string & {});

export const typeCodeqrIoFoldersApiSchema: EnumSchema<TypeCodeqrIoFoldersApi> =
  s.enumOf<TypeCodeqrIoFoldersApi>(TypeCodeqrIoFoldersApi);
