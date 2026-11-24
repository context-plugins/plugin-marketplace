from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.suggest_change_discard400_error1 import SuggestChangeDiscard400Error1

DiscardSuggestionDocumentErrorBody: TypeAlias = SuggestChangeDiscard400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _DiscardSuggestionDocumentError:
    def map(self, status_code: int, content: bytes) -> DiscardSuggestionDocumentErrorBody:
        match status_code:
            case 400:
                return decode_json[SuggestChangeDiscard400Error1](content)
            case _:
                return RawError(status_code, content)


discard_suggestion_document_error_mapper: Final[
    ErrorMapper[DiscardSuggestionDocumentErrorBody]
] = _DiscardSuggestionDocumentError()
