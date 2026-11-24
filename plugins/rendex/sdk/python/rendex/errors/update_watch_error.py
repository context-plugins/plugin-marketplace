from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateWatchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateWatchError:
    def map(self, status_code: int, content: bytes) -> UpdateWatchErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_watch_error_mapper: Final[ErrorMapper[UpdateWatchErrorBody]] = _UpdateWatchError()
