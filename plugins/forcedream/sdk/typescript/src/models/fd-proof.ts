import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetPenceSchema, type BudgetPence } from "./unions/budget-pence.js";
import { completedAtSchema, type CompletedAt } from "./unions/completed-at.js";
import { costPenceSchema, type CostPence } from "./unions/cost-pence.js";
import { retrievedCountSchema, type RetrievedCount } from "./unions/retrieved-count.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/**
 * The exact fields signed and verified. See x-forcedream-canonicalization for the precise reduced
 * "signable" object this maps to -- it is not simply this whole object.
 */
export type FdProof = {
  taskId: string;
  agentId: string;
  inputHash: string;
  outputHash: string;
  /**
   * Real-world value is numeric but may arrive as a JSON string; coerce with Number(x) semantics
   * before canonicalizing.
   */
  costPence: CostPence;
  budgetPence: BudgetPence;
  /** When present, the signable includes 10 fields instead of 8. */
  externalCostHash?: string | null;
  retrievedCount?: RetrievedCount | null;
  startedAt: StartedAt;
  /** Coerced to a string exactly as JS's String(x) would, not left as a raw number. */
  completedAt: CompletedAt;
  algorithm?: string;
  /** Base64-encoded Ed25519 signature over the SHA-256 digest of the canonical signable string. */
  signature?: string;
  keyId?: string;
  wormSeal?: string;
  proofId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fdProofSchema: Schema<FdProof> = s.object<FdProof>(
  {
    taskId: s.string(),
    agentId: s.string(),
    inputHash: s.string(),
    outputHash: s.string(),
    costPence: costPenceSchema,
    budgetPence: budgetPenceSchema,
    externalCostHash: s.optionalNullable(s.string()),
    retrievedCount: s.optionalNullable(s.lazy(() => retrievedCountSchema)),
    startedAt: startedAtSchema,
    completedAt: completedAtSchema,
    algorithm: s.optional(s.string()),
    signature: s.optional(s.string()),
    keyId: s.optional(s.string()),
    wormSeal: s.optional(s.string()),
    proofId: s.optional(s.string()),
    _keysMap: {
      taskId: "task_id",
      agentId: "agent_id",
      inputHash: "input_hash",
      outputHash: "output_hash",
      costPence: "cost_pence",
      budgetPence: "budget_pence",
      externalCostHash: "external_cost_hash",
      retrievedCount: "retrieved_count",
      startedAt: "started_at",
      completedAt: "completed_at",
      keyId: "key_id",
      wormSeal: "worm_seal",
      proofId: "proof_id",
    },
  },
  { additionalProperties: s.json() },
);
