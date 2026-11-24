from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_suggestions401_error1 import PlaySuggestions401Error1

GetSuggestsPlaySuggestionsGet2ErrorBody: TypeAlias = PlaySuggestions401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetSuggestsPlaySuggestionsGet2Error:
    def map(self, status_code: int, content: bytes) -> GetSuggestsPlaySuggestionsGet2ErrorBody:
        match status_code:
            case 401:
                return decode_json[PlaySuggestions401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_suggests_play_suggestions_get2_error_mapper: Final[
    ErrorMapper[GetSuggestsPlaySuggestionsGet2ErrorBody]
] = _GetSuggestsPlaySuggestionsGet2Error()
