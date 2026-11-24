from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Show15ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Show15Error:
    def map(self, status_code: int, content: bytes) -> Show15ErrorBody:
        match status_code:
            case 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


show15_error_mapper: Final[ErrorMapper[Show15ErrorBody]] = _Show15Error()
