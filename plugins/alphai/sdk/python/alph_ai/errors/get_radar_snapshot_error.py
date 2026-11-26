from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetRadarSnapshotErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetRadarSnapshotError:
    def map(self, status_code: int, content: bytes) -> GetRadarSnapshotErrorBody:
        match status_code:
            case 400 | 401 | 404 | 409 | 429 | 503:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_radar_snapshot_error_mapper: Final[ErrorMapper[GetRadarSnapshotErrorBody]] = _GetRadarSnapshotError()
