import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1DevCycleManagementVariablesApiSchema,
  type Status1DevCycleManagementVariablesApi,
} from "./status1-dev-cycle-management-variables-api.js";

export type UpdateVariableStatusDto = {
  /** Status field indicating whether a variable is actively being used, or is archived. */
  status: Status1DevCycleManagementVariablesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateVariableStatusDtoSchema: Schema<UpdateVariableStatusDto> =
  s.object<UpdateVariableStatusDto>(
    {
      status: status1DevCycleManagementVariablesApiSchema,
    },
    { additionalProperties: s.json() },
  );
