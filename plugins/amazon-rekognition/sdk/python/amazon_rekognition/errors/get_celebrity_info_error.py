from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCelebrityInfoErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCelebrityInfoError:
    def map(self, status_code: int, content: bytes) -> GetCelebrityInfoErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_celebrity_info_error_mapper: Final[ErrorMapper[GetCelebrityInfoErrorBody]] = _GetCelebrityInfoError()
