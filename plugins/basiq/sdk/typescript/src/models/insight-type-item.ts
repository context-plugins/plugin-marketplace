import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./id.js";

/**
 * A single supported Insight type entry. The `dataSchema` field describes only the Insight-specific
 * input — it does not represent the full `POST /insights` request body.
 */
export type InsightTypeItem = {
  /** Resource type identifier, always `insightType`. @default "insightType" */
  type?: "insightType";
  /**
   * Unique identifier for the Insight type. Maps to the `insightType` values used by existing
   * Insight endpoints: `account`, `balance`, `identity`, `income`, `expense-ratio`.
   */
  id: Id;
  /** Whether this Insight type supports multiple users in a single request. */
  supportMultipleUsers: boolean;
  /** Human-readable name for the Insight type. */
  name: string;
  /** Description of what the Insight type verifies. */
  description: string;
  /**
   * Describes only the Insight-specific input data accepted by existing Insight endpoints for this
   * type. Does not include transport-level fields such as `users` or `type`.
   */
  dataSchema: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightTypeItemSchema: Schema<InsightTypeItem> = s.object<InsightTypeItem>(
  {
    type: s.defaulted(s.literal("insightType"), "insightType"),
    id: idSchema,
    supportMultipleUsers: s.boolean(),
    name: s.string(),
    description: s.string(),
    dataSchema: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
