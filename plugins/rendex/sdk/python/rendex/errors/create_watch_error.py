from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateWatchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateWatchError:
    def map(self, status_code: int, content: bytes) -> CreateWatchErrorBody:
        match status_code:
            case 400 | 403 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_watch_error_mapper: Final[ErrorMapper[CreateWatchErrorBody]] = _CreateWatchError()
