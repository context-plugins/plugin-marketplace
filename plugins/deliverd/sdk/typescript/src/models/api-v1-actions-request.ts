import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultRiskSchema, type DefaultRisk } from "./default-risk.js";
import { riskCategorySchema, type RiskCategory } from "./risk-category.js";

export type ApiV1ActionsRequest = {
  /** Dotted, lowercase, stable: `finance.refund`. Policy is written against this name */
  actionId: string;
  /** What this does, as an approver will read it in a list */
  name: string;
  /** What it means and when it is used, for whoever writes the policy */
  description?: string;
  /**
   * A JSON Schema object over the action's named arguments. A small subset:
   * type/properties/required, fields of string, number, integer or boolean, with enum, minimum,
   * maximum, minLength, maxLength and pattern. Anything else is refused rather than ignored
   */
  inputSchema: Record<string, unknown>;
  /** Fields an approver may correct before approving. Omit for approve-or-reject only */
  editableFields?: string[];
  /** The approval headline, templated over the input: `Refund {{amount}} {{currency}}` */
  displayTitle?: string;
  /** What kind of harm this risks */
  riskCategory?: RiskCategory;
  /** The urgency an approval inherits when the caller declares none */
  defaultRisk?: DefaultRisk;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ActionsRequestProperties: s.Shape<ApiV1ActionsRequest> = {
  actionId: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  inputSchema: s.record(s.string(), s.unknown()),
  editableFields: s.optional(s.array(s.string())),
  displayTitle: s.optional(s.string()),
  riskCategory: s.optional(s.lazy(() => riskCategorySchema)),
  defaultRisk: s.optional(s.lazy(() => defaultRiskSchema)),
};

export const apiV1ActionsRequestInternalSchema: Schema<ApiV1ActionsRequest> = s.object<ApiV1ActionsRequest>(
  apiV1ActionsRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1ActionsRequestSchema: Schema<ApiV1ActionsRequest> = s.lazySchema(() =>
  s.object<ApiV1ActionsRequest>(
    {
      ...apiV1ActionsRequestProperties,
      actionId: s.string().check(s.maxLength(120), s.pattern("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")),
      name: s.string().check(s.minLength(1), s.maxLength(120)),
      description: s.optional(s.string().check(s.maxLength(4000))),
      editableFields: s.optional(s.array(s.string().check(s.maxLength(120)))),
      displayTitle: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
