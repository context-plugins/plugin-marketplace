import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contractUtilizationSchemaSchema,
  type ContractUtilizationSchema,
} from "./contract-utilization-schema.js";

export type ContractsUtilizationResponseDto = {
  /** Contract utilization data, grouped by contract period. */
  contracts: ContractUtilizationSchema[];
};

export const contractsUtilizationResponseDtoSchema: Schema<ContractsUtilizationResponseDto> =
  s.object<ContractsUtilizationResponseDto>({
    contracts: s.array(s.lazy(() => contractUtilizationSchemaSchema)),
  });
