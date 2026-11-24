import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudflowBundleTableFieldSchema,
  type CloudflowBundleTableField,
} from "./cloudflow-bundle-table-field.js";

export type DatastoreTable = {
  key: string;
  name: string;
  description?: string;
  fields: CloudflowBundleTableField[];
  usedByNodes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datastoreTableSchema: Schema<DatastoreTable> = s.object<DatastoreTable>(
  {
    key: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    fields: s.array(s.lazy(() => cloudflowBundleTableFieldSchema)),
    usedByNodes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
