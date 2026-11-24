from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Delete4ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Delete4Error:
    def map(self, status_code: int, content: bytes) -> Delete4ErrorBody:
        match status_code:
            case 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete4_error_mapper: Final[ErrorMapper[Delete4ErrorBody]] = _Delete4Error()
