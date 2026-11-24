from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Delete2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Delete2Error:
    def map(self, status_code: int, content: bytes) -> Delete2ErrorBody:
        match status_code:
            case 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete2_error_mapper: Final[ErrorMapper[Delete2ErrorBody]] = _Delete2Error()
