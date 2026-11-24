import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceIndexStatus = {
  Pending: "pending",
  Indexing: "indexing",
  Ready: "ready",
  Failed: "failed",
  Unavailable: "unavailable",
} as const;
export type SourceIndexStatus = (typeof SourceIndexStatus)[keyof typeof SourceIndexStatus] | (string & {});

export const sourceIndexStatusSchema: EnumSchema<SourceIndexStatus> =
  s.enumOf<SourceIndexStatus>(SourceIndexStatus);
