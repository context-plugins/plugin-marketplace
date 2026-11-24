from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ProfessionalsSearchErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ProfessionalsSearchError:
    def map(self, status_code: int, content: bytes) -> ProfessionalsSearchErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


professionals_search_error_mapper: Final[ErrorMapper[ProfessionalsSearchErrorBody]] = _ProfessionalsSearchError()
