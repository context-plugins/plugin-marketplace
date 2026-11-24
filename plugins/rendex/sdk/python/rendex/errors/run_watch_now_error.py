from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

RunWatchNowErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _RunWatchNowError:
    def map(self, status_code: int, content: bytes) -> RunWatchNowErrorBody:
        match status_code:
            case 404 | 409 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


run_watch_now_error_mapper: Final[ErrorMapper[RunWatchNowErrorBody]] = _RunWatchNowError()
