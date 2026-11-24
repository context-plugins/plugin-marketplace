import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowedValueSchema, type AllowedValue } from "./allowed-value.js";

export type EnumSchemaModel = {
  allowedValues: AllowedValue[];
  allowAdditionalValues: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enumSchemaModelSchema: Schema<EnumSchemaModel> = s.object<EnumSchemaModel>(
  {
    allowedValues: s.array(s.lazy(() => allowedValueSchema)),
    allowAdditionalValues: s.boolean(),
  },
  { additionalProperties: s.json() },
);
