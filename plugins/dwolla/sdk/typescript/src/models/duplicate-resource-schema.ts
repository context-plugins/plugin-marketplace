import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links1Schema, type Links1 } from "./links1.js";

export type DuplicateResourceSchema = {
  code: string;
  message: string;
  links?: Links1;
};

export const duplicateResourceSchemaSchema: Schema<DuplicateResourceSchema> =
  s.object<DuplicateResourceSchema>({
    code: s.string(),
    message: s.string(),
    links: s.optional(s.lazy(() => links1Schema)),
    _keysMap: {
      links: "_links",
    },
  });
