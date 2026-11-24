from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetSyncDraftErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetSyncDraftError:
    def map(self, status_code: int, content: bytes) -> GetSyncDraftErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_sync_draft_error_mapper: Final[ErrorMapper[GetSyncDraftErrorBody]] = _GetSyncDraftError()
