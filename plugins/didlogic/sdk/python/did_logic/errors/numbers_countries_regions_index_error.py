from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_countries_regions401_error1 import ApiV2NumbersCountriesRegions401Error1
from ..models.api_v2_numbers_countries_regions403_error1 import ApiV2NumbersCountriesRegions403Error1
from ..models.api_v2_numbers_countries_regions404_error1 import ApiV2NumbersCountriesRegions404Error1

NumbersCountriesRegionsIndexErrorBody: TypeAlias = (
    ApiV2NumbersCountriesRegions401Error1
    | ApiV2NumbersCountriesRegions403Error1
    | ApiV2NumbersCountriesRegions404Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _NumbersCountriesRegionsIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersCountriesRegionsIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersCountriesRegions401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersCountriesRegions403Error1](content)
            case 404:
                return decode_json[ApiV2NumbersCountriesRegions404Error1](content)
            case _:
                return RawError(status_code, content)


numbers_countries_regions_index_error_mapper: Final[
    ErrorMapper[NumbersCountriesRegionsIndexErrorBody]
] = _NumbersCountriesRegionsIndexError()
