import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Retention = {
  DeletionRetentionUnspecified: "DELETION_RETENTION_UNSPECIFIED",
  Minimum: "MINIMUM",
  NoRetention: "NO_RETENTION",
} as const;
export type Retention = (typeof Retention)[keyof typeof Retention] | (string & {});

export const retentionSchema: EnumSchema<Retention> = s.enumOf<Retention>(Retention);
