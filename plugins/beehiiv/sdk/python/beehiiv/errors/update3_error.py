from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Update3ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Update3Error:
    def map(self, status_code: int, content: bytes) -> Update3ErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update3_error_mapper: Final[ErrorMapper[Update3ErrorBody]] = _Update3Error()
