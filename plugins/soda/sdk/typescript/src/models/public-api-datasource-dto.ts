import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiDatasourceTypeDtoSchema,
  type PublicApiDatasourceTypeDto,
} from "./public-api-datasource-type-dto.js";

export type PublicApiDatasourceDto = {
  createdAt?: Date;
  id?: string;
  label?: string;
  name?: string;
  type?: PublicApiDatasourceTypeDto;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasourceDtoSchema: Schema<PublicApiDatasourceDto> = s.object<PublicApiDatasourceDto>(
  {
    createdAt: s.optional(s.dateTime()),
    id: s.optional(s.string()),
    label: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => publicApiDatasourceTypeDtoSchema)),
    updatedAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
