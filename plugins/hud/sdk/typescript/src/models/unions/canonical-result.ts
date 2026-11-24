import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  qaAgentResultV1InternalSchema,
  qaAgentResultV1Schema,
  type QaAgentResultV1,
} from "../qa-agent-result-v1.js";

export type CanonicalResult = QaAgentResultV1;

export const canonicalResultInternalSchema: Schema<CanonicalResult> = s.of<CanonicalResult>(
  s.union([s.lazy(() => qaAgentResultV1InternalSchema)]),
);

export const canonicalResultSchema: Schema<CanonicalResult> = s.lazySchema(() =>
  s.of<CanonicalResult>(s.union([s.lazy(() => qaAgentResultV1Schema)])),
);
