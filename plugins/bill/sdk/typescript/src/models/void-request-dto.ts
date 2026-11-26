import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { voidTypeRequestSchema, type VoidTypeRequest } from "./void-type-request.js";

/** Request to Void a Payment. */
export type VoidRequestDto = {
  type: VoidTypeRequest;
  /** Void payment request reason */
  reason: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const voidRequestDtoProperties: s.Shape<VoidRequestDto> = {
  type: voidTypeRequestSchema,
  reason: s.string(),
};

export const voidRequestDtoInternalSchema: Schema<VoidRequestDto> = s.object<VoidRequestDto>(
  voidRequestDtoProperties,
  { additionalProperties: s.json() },
);

export const voidRequestDtoSchema: Schema<VoidRequestDto> = s.lazySchema(() =>
  s.object<VoidRequestDto>(
    {
      ...voidRequestDtoProperties,
      reason: s.string().check(s.maxLength(4000)),
    },
    { additionalProperties: s.json() },
  ),
);
