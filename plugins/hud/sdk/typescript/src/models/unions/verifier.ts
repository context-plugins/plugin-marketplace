import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedVerifierTaskInternalSchema,
  submittedVerifierTaskSchema,
  type SubmittedVerifierTask,
} from "../submitted-verifier-task.js";

export type Verifier = SubmittedVerifierTask;

export const verifierInternalSchema: Schema<Verifier> = s.of<Verifier>(
  s.union([s.lazy(() => submittedVerifierTaskInternalSchema)]),
);

export const verifierSchema: Schema<Verifier> = s.lazySchema(() =>
  s.of<Verifier>(s.union([s.lazy(() => submittedVerifierTaskSchema)])),
);
