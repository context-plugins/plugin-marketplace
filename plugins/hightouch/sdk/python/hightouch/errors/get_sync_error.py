from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetSyncErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetSyncError:
    def map(self, status_code: int, content: bytes) -> GetSyncErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_sync_error_mapper: Final[ErrorMapper[GetSyncErrorBody]] = _GetSyncError()
