from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteSnapshotScheduleErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteSnapshotScheduleError:
    def map(self, status_code: int, content: bytes) -> DeleteSnapshotScheduleErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_snapshot_schedule_error_mapper: Final[
    ErrorMapper[DeleteSnapshotScheduleErrorBody]
] = _DeleteSnapshotScheduleError()
