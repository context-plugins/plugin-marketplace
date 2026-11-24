import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { targetSelectionSchema, type TargetSelection } from "./target-selection.js";

export type CreateOtaUpdateRequest = {
  otaUpdateId: string;
  description?: string;
  targets: string[];
  protocols?: string[];
  targetSelection?: TargetSelection;
  files: Record<string, unknown>[];
  roleArn?: string;
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOtaUpdateRequestSchema: Schema<CreateOtaUpdateRequest> = s.object<CreateOtaUpdateRequest>(
  {
    otaUpdateId: s.string(),
    description: s.optional(s.string()),
    targets: s.array(s.string()),
    protocols: s.optional(s.array(s.string())),
    targetSelection: s.optional(s.lazy(() => targetSelectionSchema)),
    files: s.array(s.record(s.string(), s.unknown())),
    roleArn: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
