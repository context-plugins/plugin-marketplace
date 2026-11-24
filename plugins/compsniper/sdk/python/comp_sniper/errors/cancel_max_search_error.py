from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

CancelMaxSearchErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _CancelMaxSearchError:
    def map(self, status_code: int, content: bytes) -> CancelMaxSearchErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


cancel_max_search_error_mapper: Final[ErrorMapper[CancelMaxSearchErrorBody]] = _CancelMaxSearchError()
