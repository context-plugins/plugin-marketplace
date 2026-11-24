from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateSnapshotErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateSnapshotError:
    def map(self, status_code: int, content: bytes) -> CreateSnapshotErrorBody:
        match status_code:
            case 400 | 500 | 503:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_snapshot_error_mapper: Final[ErrorMapper[CreateSnapshotErrorBody]] = _CreateSnapshotError()
