from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Create7ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Create7Error:
    def map(self, status_code: int, content: bytes) -> Create7ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 422 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create7_error_mapper: Final[ErrorMapper[Create7ErrorBody]] = _Create7Error()
