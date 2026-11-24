import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SchemaVersion = {
  AtifV10: "ATIF-v1.0",
  AtifV11: "ATIF-v1.1",
  AtifV12: "ATIF-v1.2",
  AtifV13: "ATIF-v1.3",
  AtifV14: "ATIF-v1.4",
  AtifV15: "ATIF-v1.5",
  AtifV16: "ATIF-v1.6",
  AtifV17: "ATIF-v1.7",
  AtifV18: "ATIF-v1.8",
} as const;
export type SchemaVersion = (typeof SchemaVersion)[keyof typeof SchemaVersion] | (string & {});

export const schemaVersionSchema: EnumSchema<SchemaVersion> = s.enumOf<SchemaVersion>(SchemaVersion);
