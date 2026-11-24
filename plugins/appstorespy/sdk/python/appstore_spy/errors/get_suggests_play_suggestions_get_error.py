from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_suggestions401_error1 import PlaySuggestions401Error1

GetSuggestsPlaySuggestionsGetErrorBody: TypeAlias = PlaySuggestions401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetSuggestsPlaySuggestionsGetError:
    def map(self, status_code: int, content: bytes) -> GetSuggestsPlaySuggestionsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlaySuggestions401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_suggests_play_suggestions_get_error_mapper: Final[
    ErrorMapper[GetSuggestsPlaySuggestionsGetErrorBody]
] = _GetSuggestsPlaySuggestionsGetError()
