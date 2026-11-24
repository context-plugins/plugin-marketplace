import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GcpService = {
  Compute: "compute",
  CloudSql: "cloud_sql",
} as const;
export type GcpService = (typeof GcpService)[keyof typeof GcpService] | (string & {});

export const gcpServiceSchema: EnumSchema<GcpService> = s.enumOf<GcpService>(GcpService);
