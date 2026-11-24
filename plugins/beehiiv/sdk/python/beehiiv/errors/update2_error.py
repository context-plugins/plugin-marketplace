from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Update2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Update2Error:
    def map(self, status_code: int, content: bytes) -> Update2ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 422 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update2_error_mapper: Final[ErrorMapper[Update2ErrorBody]] = _Update2Error()
