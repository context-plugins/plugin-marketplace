import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";
import { phaseSchema, type Phase } from "./phase.js";
import { verificationSchema, type Verification } from "./verification.js";

export type Receipt = {
  id: string;
  gateId: string;
  phase: Phase;
  claimId: string | null;
  executedAt: string | null;
  artifactSha256: string | null;
  destination: Destination1 | null;
  result: Record<string, unknown>;
  verification: Verification;
  detail: string | null;
  reportedBy: string;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receiptSchema: Schema<Receipt> = s.object<Receipt>(
  {
    id: s.string(),
    gateId: s.string(),
    phase: phaseSchema,
    claimId: s.nullable(s.string()),
    executedAt: s.nullable(s.string()),
    artifactSha256: s.nullable(s.string()),
    destination: s.nullable(s.lazy(() => destination1Schema)),
    result: s.record(s.string(), s.unknown()),
    verification: verificationSchema,
    detail: s.nullable(s.string()),
    reportedBy: s.string(),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
