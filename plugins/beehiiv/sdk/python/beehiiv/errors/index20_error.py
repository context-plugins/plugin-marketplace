from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

Index20ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _Index20Error:
    def map(self, status_code: int, content: bytes) -> Index20ErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


index20_error_mapper: Final[ErrorMapper[Index20ErrorBody]] = _Index20Error()
