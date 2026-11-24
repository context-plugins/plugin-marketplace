from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_aggregates_countries401_error1 import IosAggregatesCountries401Error1

GetCountryAggregatesIosAggregatesCountriesGetErrorBody: TypeAlias = (
    IosAggregatesCountries401Error1 | str | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _GetCountryAggregatesIosAggregatesCountriesGetError:
    def map(self, status_code: int, content: bytes) -> GetCountryAggregatesIosAggregatesCountriesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosAggregatesCountries401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_country_aggregates_ios_aggregates_countries_get_error_mapper: Final[
    ErrorMapper[GetCountryAggregatesIosAggregatesCountriesGetErrorBody]
] = _GetCountryAggregatesIosAggregatesCountriesGetError()
