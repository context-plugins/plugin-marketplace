from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_countries_cities401_error1 import ApiV2NumbersCountriesCities401Error1
from ..models.api_v2_numbers_countries_cities403_error1 import ApiV2NumbersCountriesCities403Error1
from ..models.api_v2_numbers_countries_cities404_error1 import ApiV2NumbersCountriesCities404Error1

NumbersCountriesCitiesIndexErrorBody: TypeAlias = (
    ApiV2NumbersCountriesCities401Error1
    | ApiV2NumbersCountriesCities403Error1
    | ApiV2NumbersCountriesCities404Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersCountriesCitiesIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersCountriesCitiesIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersCountriesCities401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersCountriesCities403Error1](content)
            case 404:
                return decode_json[ApiV2NumbersCountriesCities404Error1](content)
            case _:
                return RawError(status_code, content)


numbers_countries_cities_index_error_mapper: Final[
    ErrorMapper[NumbersCountriesCitiesIndexErrorBody]
] = _NumbersCountriesCitiesIndexError()
