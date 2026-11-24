from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateMaintenanceStartTimeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateMaintenanceStartTimeError:
    def map(self, status_code: int, content: bytes) -> UpdateMaintenanceStartTimeErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_maintenance_start_time_error_mapper: Final[
    ErrorMapper[UpdateMaintenanceStartTimeErrorBody]
] = _UpdateMaintenanceStartTimeError()
