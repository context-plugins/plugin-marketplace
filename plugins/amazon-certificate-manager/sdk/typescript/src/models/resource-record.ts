import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceRecord = {
  /** The name of the DNS record to create in your domain. This is supplied by ACM. */
  name: string;
  /** The type of DNS record. Currently this can be CNAME. @default "CNAME" */
  type?: "CNAME";
  /** The value of the CNAME record to add to your DNS database. This is supplied by ACM. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceRecordSchema: Schema<ResourceRecord> = s.object<ResourceRecord>(
  {
    name: s.string(),
    type: s.defaulted(s.literal("CNAME"), "CNAME"),
    value: s.string(),
    _keysMap: {
      name: "Name",
      type: "Type",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
