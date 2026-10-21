import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importanceSchema, type Importance } from "./importance.js";
import { roleSchema, type Role } from "./role.js";

export type ImsOnerosterResourcesV1P2ResourcesRequest1 = {
  metadata?: Record<string, Record<string, unknown>> | null;
  title?: string;
  roles?: Role[];
  importance?: Importance;
  vendorResourceId?: string;
  vendorId?: string;
  applicationId?: string;
};

export const imsOnerosterResourcesV1P2ResourcesRequest1Schema: Schema<ImsOnerosterResourcesV1P2ResourcesRequest1> =
  s.object<ImsOnerosterResourcesV1P2ResourcesRequest1>({
    metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
    title: s.optional(s.string()),
    roles: s.optional(s.array(s.lazy(() => roleSchema))),
    importance: s.optional(s.lazy(() => importanceSchema)),
    vendorResourceId: s.optional(s.string()),
    vendorId: s.optional(s.string()),
    applicationId: s.optional(s.string()),
  });
