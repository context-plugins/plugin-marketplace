from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Create5ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Create5Error:
    def map(self, status_code: int, content: bytes) -> Create5ErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create5_error_mapper: Final[ErrorMapper[Create5ErrorBody]] = _Create5Error()
