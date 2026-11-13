import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";

export type Doc = {
  id: string;
  name: string;
  access: Access;
  isPinned: boolean;
  urlId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docSchema: Schema<Doc> = s.object<Doc>(
  {
    id: s.string(),
    name: s.string(),
    access: accessSchema,
    isPinned: s.boolean(),
    urlId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
