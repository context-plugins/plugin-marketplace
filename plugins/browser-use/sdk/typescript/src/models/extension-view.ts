import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExtensionView = {
  id: string;
  name: string;
  version: string;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extensionViewSchema: Schema<ExtensionView> = s.object<ExtensionView>(
  {
    id: s.string(),
    name: s.string(),
    version: s.string(),
    createdAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
