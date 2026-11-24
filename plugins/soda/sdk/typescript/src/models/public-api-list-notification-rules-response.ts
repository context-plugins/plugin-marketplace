import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiNotificationRuleDtoSchema,
  type PublicApiNotificationRuleDto,
} from "./public-api-notification-rule-dto.js";

export type PublicApiListNotificationRulesResponse = {
  content: PublicApiNotificationRuleDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListNotificationRulesResponseSchema: Schema<PublicApiListNotificationRulesResponse> =
  s.object<PublicApiListNotificationRulesResponse>(
    {
      content: s.array(s.lazy(() => publicApiNotificationRuleDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
