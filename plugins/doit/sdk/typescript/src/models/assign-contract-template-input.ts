import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The customers a contract template is applied to. */
export type AssignContractTemplateInput = {
  /**
   * Identifiers of the customers to create a draft contract for. Each identifier must name a tenant
   * within the authenticated tenant's own hierarchy, of the tier one level below it: a distributor
   * supplies resellers, a reseller supplies end customers. Repeated identifiers are ignored, and a
   * customer already holding a contract from this template receives another draft.
   */
  customerIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const assignContractTemplateInputProperties: s.Shape<AssignContractTemplateInput> = {
  customerIds: s.array(s.string()),
};

export const assignContractTemplateInputInternalSchema: Schema<AssignContractTemplateInput> =
  s.object<AssignContractTemplateInput>(assignContractTemplateInputProperties, {
    additionalProperties: s.json(),
  });

export const assignContractTemplateInputSchema: Schema<AssignContractTemplateInput> = s.lazySchema(() =>
  s.object<AssignContractTemplateInput>(
    {
      ...assignContractTemplateInputProperties,
      customerIds: s.array(s.string()).check(s.minLength(1), s.maxLength(250)),
    },
    { additionalProperties: s.json() },
  ),
);
