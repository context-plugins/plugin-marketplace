import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DiagnosticsWarehouseFailedRowsStorageStrategyDto = {
  FullFailedRows: "fullFailedRows",
  UniqueKeys: "uniqueKeys",
  ScansAndResultsOnly: "scansAndResultsOnly",
} as const;
export type DiagnosticsWarehouseFailedRowsStorageStrategyDto =
  | (typeof DiagnosticsWarehouseFailedRowsStorageStrategyDto)[keyof typeof DiagnosticsWarehouseFailedRowsStorageStrategyDto]
  | (string & {});

export const diagnosticsWarehouseFailedRowsStorageStrategyDtoSchema: EnumSchema<DiagnosticsWarehouseFailedRowsStorageStrategyDto> =
  s.enumOf<DiagnosticsWarehouseFailedRowsStorageStrategyDto>(
    DiagnosticsWarehouseFailedRowsStorageStrategyDto,
  );
