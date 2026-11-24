import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerStateSeatAssignee = {
  id: string;
  externalId: string;
  name: string | null;
  email: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateSeatAssigneeSchema: Schema<CustomerStateSeatAssignee> =
  s.object<CustomerStateSeatAssignee>(
    {
      id: s.string(),
      externalId: s.string(),
      name: s.nullable(s.string()),
      email: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
