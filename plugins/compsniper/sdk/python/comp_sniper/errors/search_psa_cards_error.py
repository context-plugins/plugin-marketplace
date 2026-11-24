from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_psa_search400_error1 import V1PsaSearch400Error1
from ..models.v1_psa_search401_error1 import V1PsaSearch401Error1
from ..models.v1_psa_search429_error1 import V1PsaSearch429Error1
from ..models.v1_psa_search502_error1 import V1PsaSearch502Error1
from ..models.v1_psa_search503_error1 import V1PsaSearch503Error1

SearchPsaCardsErrorBody: TypeAlias = (
    V1PsaSearch400Error1
    | V1PsaSearch401Error1
    | V1PsaSearch429Error1
    | V1PsaSearch502Error1
    | V1PsaSearch503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _SearchPsaCardsError:
    def map(self, status_code: int, content: bytes) -> SearchPsaCardsErrorBody:
        match status_code:
            case 400:
                return decode_json[V1PsaSearch400Error1](content)
            case 401:
                return decode_json[V1PsaSearch401Error1](content)
            case 429:
                return decode_json[V1PsaSearch429Error1](content)
            case 502:
                return decode_json[V1PsaSearch502Error1](content)
            case 503:
                return decode_json[V1PsaSearch503Error1](content)
            case _:
                return RawError(status_code, content)


search_psa_cards_error_mapper: Final[ErrorMapper[SearchPsaCardsErrorBody]] = _SearchPsaCardsError()
