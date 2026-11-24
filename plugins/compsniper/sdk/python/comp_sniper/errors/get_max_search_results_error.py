from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetMaxSearchResultsErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetMaxSearchResultsError:
    def map(self, status_code: int, content: bytes) -> GetMaxSearchResultsErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_max_search_results_error_mapper: Final[ErrorMapper[GetMaxSearchResultsErrorBody]] = _GetMaxSearchResultsError()
