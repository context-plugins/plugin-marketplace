from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.suggest_change_merge400_error1 import SuggestChangeMerge400Error1

MergeSuggestionIntoMainDocumentErrorBody: TypeAlias = SuggestChangeMerge400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _MergeSuggestionIntoMainDocumentError:
    def map(self, status_code: int, content: bytes) -> MergeSuggestionIntoMainDocumentErrorBody:
        match status_code:
            case 400:
                return decode_json[SuggestChangeMerge400Error1](content)
            case _:
                return RawError(status_code, content)


merge_suggestion_into_main_document_error_mapper: Final[
    ErrorMapper[MergeSuggestionIntoMainDocumentErrorBody]
] = _MergeSuggestionIntoMainDocumentError()
