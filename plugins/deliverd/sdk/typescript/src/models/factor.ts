import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  StatusDeliverdDevApprovalsApi,
  statusDeliverdDevApprovalsApiSchema,
} from "./status-deliverd-dev-approvals-api.js";

export type Factor = {
  label: string;
  /** @default StatusDeliverdDevApprovalsApi.Info */
  status?: StatusDeliverdDevApprovalsApi;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const factorProperties: s.Shape<Factor> = {
  label: s.string(),
  status: s.defaulted(statusDeliverdDevApprovalsApiSchema, StatusDeliverdDevApprovalsApi.Info),
  detail: s.optional(s.string()),
};

export const factorInternalSchema: Schema<Factor> = s.object<Factor>(factorProperties, {
  additionalProperties: s.json(),
});

export const factorSchema: Schema<Factor> = s.lazySchema(() =>
  s.object<Factor>(
    {
      ...factorProperties,
      label: s.string().check(s.minLength(1), s.maxLength(200)),
      detail: s.optional(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
