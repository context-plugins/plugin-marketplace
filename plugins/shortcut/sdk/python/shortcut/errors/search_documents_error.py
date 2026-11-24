from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.disabled_feature_error import DisabledFeatureError
from ..models.max_search_results_exceeded_error import MaxSearchResultsExceededError

SearchDocumentsErrorBody: TypeAlias = MaxSearchResultsExceededError | DisabledFeatureError | RawError


@dataclass(frozen=True, slots=True)
class _SearchDocumentsError:
    def map(self, status_code: int, content: bytes) -> SearchDocumentsErrorBody:
        match status_code:
            case 400:
                return decode_json[MaxSearchResultsExceededError](content)
            case 403:
                return decode_json[DisabledFeatureError](content)
            case 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


search_documents_error_mapper: Final[ErrorMapper[SearchDocumentsErrorBody]] = _SearchDocumentsError()
