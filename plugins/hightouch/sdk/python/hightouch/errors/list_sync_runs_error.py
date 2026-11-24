from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

ListSyncRunsErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _ListSyncRunsError:
    def map(self, status_code: int, content: bytes) -> ListSyncRunsErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


list_sync_runs_error_mapper: Final[ErrorMapper[ListSyncRunsErrorBody]] = _ListSyncRunsError()
