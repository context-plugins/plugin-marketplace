import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Schemas = {
  schema: string;
  type: string;
  properties: Record<string, Record<string, unknown>>;
  required: string[];
};

export const schemasSchema: Schema<Schemas> = s.object<Schemas>({
  schema: s.string(),
  type: s.string(),
  properties: s.record(s.string(), s.record(s.string(), s.unknown())),
  required: s.array(s.string()),
  _keysMap: {
    schema: "$schema",
  },
});
