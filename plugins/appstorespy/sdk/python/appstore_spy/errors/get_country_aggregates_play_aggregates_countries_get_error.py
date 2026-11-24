from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_aggregates_countries401_error1 import PlayAggregatesCountries401Error1

GetCountryAggregatesPlayAggregatesCountriesGetErrorBody: TypeAlias = (
    PlayAggregatesCountries401Error1 | str | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _GetCountryAggregatesPlayAggregatesCountriesGetError:
    def map(self, status_code: int, content: bytes) -> GetCountryAggregatesPlayAggregatesCountriesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAggregatesCountries401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_country_aggregates_play_aggregates_countries_get_error_mapper: Final[
    ErrorMapper[GetCountryAggregatesPlayAggregatesCountriesGetErrorBody]
] = _GetCountryAggregatesPlayAggregatesCountriesGetError()
