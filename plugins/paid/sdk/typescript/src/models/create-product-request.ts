import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateProductRequest = {
  name: string;
  description?: string | null;
  /** @default false */
  active?: boolean;
  productCode?: string | null;
  externalId?: string | null;
  metadata?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProductRequestSchema: Schema<CreateProductRequest> = s.object<CreateProductRequest>(
  {
    name: s.string(),
    description: s.optionalNullable(s.string()),
    active: s.defaulted(s.boolean(), false),
    productCode: s.optionalNullable(s.string()),
    externalId: s.optionalNullable(s.string()),
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
