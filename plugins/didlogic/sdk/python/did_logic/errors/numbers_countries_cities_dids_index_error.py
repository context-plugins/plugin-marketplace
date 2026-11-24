from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_countries_cities_dids401_error1 import ApiV2NumbersCountriesCitiesDids401Error1
from ..models.api_v2_numbers_countries_cities_dids403_error1 import ApiV2NumbersCountriesCitiesDids403Error1
from ..models.api_v2_numbers_countries_cities_dids404_error1 import ApiV2NumbersCountriesCitiesDids404Error1

NumbersCountriesCitiesDidsIndexErrorBody: TypeAlias = (
    ApiV2NumbersCountriesCitiesDids401Error1
    | ApiV2NumbersCountriesCitiesDids403Error1
    | ApiV2NumbersCountriesCitiesDids404Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersCountriesCitiesDidsIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersCountriesCitiesDidsIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersCountriesCitiesDids401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersCountriesCitiesDids403Error1](content)
            case 404:
                return decode_json[ApiV2NumbersCountriesCitiesDids404Error1](content)
            case _:
                return RawError(status_code, content)


numbers_countries_cities_dids_index_error_mapper: Final[
    ErrorMapper[NumbersCountriesCitiesDidsIndexErrorBody]
] = _NumbersCountriesCitiesDidsIndexError()
