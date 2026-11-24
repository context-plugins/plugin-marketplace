from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.max_search_results_exceeded_error import MaxSearchResultsExceededError

SearchObjectivesErrorBody: TypeAlias = MaxSearchResultsExceededError | RawError


@dataclass(frozen=True, slots=True)
class _SearchObjectivesError:
    def map(self, status_code: int, content: bytes) -> SearchObjectivesErrorBody:
        match status_code:
            case 400:
                return decode_json[MaxSearchResultsExceededError](content)
            case 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_objectives_error_mapper: Final[ErrorMapper[SearchObjectivesErrorBody]] = _SearchObjectivesError()
