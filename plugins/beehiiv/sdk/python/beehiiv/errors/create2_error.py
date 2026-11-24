from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Create2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Create2Error:
    def map(self, status_code: int, content: bytes) -> Create2ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create2_error_mapper: Final[ErrorMapper[Create2ErrorBody]] = _Create2Error()
