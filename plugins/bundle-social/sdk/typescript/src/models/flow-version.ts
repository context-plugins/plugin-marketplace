import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { definitionInternalSchema, definitionSchema, type Definition } from "./definition.js";
import { status2Schema, type Status2 } from "./status2.js";

export type FlowVersion = {
  id: string;
  flowId: string;
  version: number;
  status: Status2;
  definition: Definition;
  publishedAt?: Date | null;
  publishedByUserId?: string | null;
  createdAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const flowVersionProperties: s.Shape<FlowVersion> = {
  id: s.string(),
  flowId: s.string(),
  version: s.float64(),
  status: status2Schema,
  definition: definitionInternalSchema,
  publishedAt: s.optionalNullable(s.dateTime()),
  publishedByUserId: s.optionalNullable(s.string()),
  createdAt: s.nullable(s.dateTime()),
};

export const flowVersionInternalSchema: Schema<FlowVersion> = s.object<FlowVersion>(flowVersionProperties, {
  additionalProperties: s.json(),
});

export const flowVersionSchema: Schema<FlowVersion> = s.lazySchema(() =>
  s.object<FlowVersion>(
    {
      ...flowVersionProperties,
      definition: definitionSchema,
    },
    { additionalProperties: s.json() },
  ),
);
