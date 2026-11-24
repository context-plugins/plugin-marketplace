from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FindRespondentsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FindRespondentsError:
    def map(self, status_code: int, content: bytes) -> FindRespondentsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


find_respondents_error_mapper: Final[ErrorMapper[FindRespondentsErrorBody]] = _FindRespondentsError()
