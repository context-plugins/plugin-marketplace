from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiagnosticsWarehouseFailedRowsStorageStrategyDto(str, Enum):
    FULL_FAILED_ROWS = "fullFailedRows"
    UNIQUE_KEYS = "uniqueKeys"
    SCANS_AND_RESULTS_ONLY = "scansAndResultsOnly"

    __str__ = str.__str__


DiagnosticsWarehouseFailedRowsStorageStrategyDtoOrStr: TypeAlias = Annotated[
    DiagnosticsWarehouseFailedRowsStorageStrategyDto | str,
    open_enum_validator(DiagnosticsWarehouseFailedRowsStorageStrategyDto),
]
