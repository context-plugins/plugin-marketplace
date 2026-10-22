import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payloadIntegritySchema, type PayloadIntegrity } from "../payload-integrity.js";
import { payloadIntegrity1Schema, type PayloadIntegrity1 } from "../payload-integrity1.js";

export type PayloadIntegrity2 = PayloadIntegrity | PayloadIntegrity1;

export const payloadIntegrity2Schema: Schema<PayloadIntegrity2> = s.of<PayloadIntegrity2>(
  s.union([s.lazy(() => payloadIntegritySchema), s.lazy(() => payloadIntegrity1Schema)]),
);
