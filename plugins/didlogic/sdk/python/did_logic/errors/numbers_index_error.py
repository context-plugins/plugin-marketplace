from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers401_error1 import ApiV2Numbers401Error1

NumbersIndexErrorBody: TypeAlias = ApiV2Numbers401Error1 | RawError


@dataclass(frozen=True, slots=True)
class _NumbersIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Numbers401Error1](content)
            case _:
                return RawError(status_code, content)


numbers_index_error_mapper: Final[ErrorMapper[NumbersIndexErrorBody]] = _NumbersIndexError()
