from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_keywords403_error1 import ApiV2Keywords403Error1

GetKeywordsErrorBody: TypeAlias = ApiV2Keywords403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _GetKeywordsError:
    def map(self, status_code: int, content: bytes) -> GetKeywordsErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV2Keywords403Error1](content)
            case _:
                return RawError(status_code, content)


get_keywords_error_mapper: Final[ErrorMapper[GetKeywordsErrorBody]] = _GetKeywordsError()
