import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseInheritanceSchema, type BaseInheritance } from "../base-inheritance.js";
import { sslInspectionStateBodySchema, type SslInspectionStateBody } from "../ssl-inspection-state-body.js";

export type SslInspection1 = SslInspectionStateBody | BaseInheritance;

export const sslInspection1Schema: Schema<SslInspection1> = s.of<SslInspection1>(
  s.union([s.lazy(() => sslInspectionStateBodySchema), s.lazy(() => baseInheritanceSchema)]),
);
