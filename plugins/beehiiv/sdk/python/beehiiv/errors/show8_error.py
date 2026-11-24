from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Show8ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Show8Error:
    def map(self, status_code: int, content: bytes) -> Show8ErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


show8_error_mapper: Final[ErrorMapper[Show8ErrorBody]] = _Show8Error()
