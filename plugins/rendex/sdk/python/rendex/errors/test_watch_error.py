from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

TestWatchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _TestWatchError:
    def map(self, status_code: int, content: bytes) -> TestWatchErrorBody:
        match status_code:
            case 400 | 403 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


test_watch_error_mapper: Final[ErrorMapper[TestWatchErrorBody]] = _TestWatchError()
