import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowAction1Schema, type FlowAction1 } from "./flow-action1.js";
import { flow1Schema, type Flow1 } from "./flow1.js";
import { Type72, type72Schema } from "./type72.js";

export type TransactionAction = {
  /** Always `action`. @default Type72.Action */
  type?: Type72;
  /** The action that was triggered. */
  id: FlowAction1;
  /** The flow that the action belongs to. */
  flow: Flow1;
  /** The ID of the rule that triggered this action. */
  ruleId: string;
  /** The date this action was created at. */
  createdAt: Date;
  /** The outcome of the action. */
  outcome: Record<string, unknown>;
};

export const transactionActionSchema: Schema<TransactionAction> = s.object<TransactionAction>({
  type: s.defaulted(type72Schema, Type72.Action),
  id: flowAction1Schema,
  flow: flow1Schema,
  ruleId: s.string(),
  createdAt: s.dateTime(),
  outcome: s.record(s.string(), s.unknown()),
  _keysMap: {
    ruleId: "rule_id",
    createdAt: "created_at",
  },
});
