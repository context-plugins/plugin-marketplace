from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateSnapshotScheduleErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateSnapshotScheduleError:
    def map(self, status_code: int, content: bytes) -> UpdateSnapshotScheduleErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_snapshot_schedule_error_mapper: Final[
    ErrorMapper[UpdateSnapshotScheduleErrorBody]
] = _UpdateSnapshotScheduleError()
