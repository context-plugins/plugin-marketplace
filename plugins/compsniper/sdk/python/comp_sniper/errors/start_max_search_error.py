from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

StartMaxSearchErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _StartMaxSearchError:
    def map(self, status_code: int, content: bytes) -> StartMaxSearchErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409 | 429:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


start_max_search_error_mapper: Final[ErrorMapper[StartMaxSearchErrorBody]] = _StartMaxSearchError()
