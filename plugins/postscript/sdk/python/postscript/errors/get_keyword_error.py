from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_keywords404_error1 import ApiV2Keywords404Error1

GetKeywordErrorBody: TypeAlias = ApiV2Keywords404Error1 | RawError


@dataclass(frozen=True, slots=True)
class _GetKeywordError:
    def map(self, status_code: int, content: bytes) -> GetKeywordErrorBody:
        match status_code:
            case 404:
                return decode_json[ApiV2Keywords404Error1](content)
            case _:
                return RawError(status_code, content)


get_keyword_error_mapper: Final[ErrorMapper[GetKeywordErrorBody]] = _GetKeywordError()
