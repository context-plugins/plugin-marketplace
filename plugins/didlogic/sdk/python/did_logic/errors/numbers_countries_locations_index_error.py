from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_countries_locations401_error1 import ApiV2NumbersCountriesLocations401Error1
from ..models.api_v2_numbers_countries_locations403_error1 import ApiV2NumbersCountriesLocations403Error1
from ..models.api_v2_numbers_countries_locations404_error1 import ApiV2NumbersCountriesLocations404Error1

NumbersCountriesLocationsIndexErrorBody: TypeAlias = (
    ApiV2NumbersCountriesLocations401Error1
    | ApiV2NumbersCountriesLocations403Error1
    | ApiV2NumbersCountriesLocations404Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersCountriesLocationsIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersCountriesLocationsIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersCountriesLocations401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersCountriesLocations403Error1](content)
            case 404:
                return decode_json[ApiV2NumbersCountriesLocations404Error1](content)
            case _:
                return RawError(status_code, content)


numbers_countries_locations_index_error_mapper: Final[
    ErrorMapper[NumbersCountriesLocationsIndexErrorBody]
] = _NumbersCountriesLocationsIndexError()
