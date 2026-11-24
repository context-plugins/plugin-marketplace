from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Show14ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Show14Error:
    def map(self, status_code: int, content: bytes) -> Show14ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


show14_error_mapper: Final[ErrorMapper[Show14ErrorBody]] = _Show14Error()
