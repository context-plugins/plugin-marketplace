import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { type8Schema, type Type8 } from "./type8.js";

export type Resource = {
  id: string;
  name: string;
  hash?: string;
  version?: string;
  type?: Type8;
  data?: Data;
};

export const resourceSchema: Schema<Resource> = s.object<Resource>({
  id: s.string(),
  name: s.string(),
  hash: s.optional(s.string()),
  version: s.optional(s.string()),
  type: s.optional(s.lazy(() => type8Schema)),
  data: s.optional(s.lazy(() => dataSchema)),
});
