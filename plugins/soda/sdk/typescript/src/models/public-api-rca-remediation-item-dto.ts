import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rcaPriorityDtoSchema, type RcaPriorityDto } from "./rca-priority-dto.js";

export type PublicApiRcaRemediationItemDto = {
  action: string;
  priority?: RcaPriorityDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaRemediationItemDtoSchema: Schema<PublicApiRcaRemediationItemDto> =
  s.object<PublicApiRcaRemediationItemDto>(
    {
      action: s.string(),
      priority: s.optional(s.lazy(() => rcaPriorityDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
