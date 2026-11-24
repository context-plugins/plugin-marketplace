from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeSnapshotScheduleErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeSnapshotScheduleError:
    def map(self, status_code: int, content: bytes) -> DescribeSnapshotScheduleErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_snapshot_schedule_error_mapper: Final[
    ErrorMapper[DescribeSnapshotScheduleErrorBody]
] = _DescribeSnapshotScheduleError()
