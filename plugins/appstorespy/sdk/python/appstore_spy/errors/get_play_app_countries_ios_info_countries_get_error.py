from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.ios_info_countries401_error1 import IosInfoCountries401Error1

GetPlayAppCountriesIosInfoCountriesGetErrorBody: TypeAlias = IosInfoCountries401Error1 | str | RawError


@dataclass(frozen=True, slots=True)
class _GetPlayAppCountriesIosInfoCountriesGetError:
    def map(self, status_code: int, content: bytes) -> GetPlayAppCountriesIosInfoCountriesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosInfoCountries401Error1](content)
            case 402:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_play_app_countries_ios_info_countries_get_error_mapper: Final[
    ErrorMapper[GetPlayAppCountriesIosInfoCountriesGetErrorBody]
] = _GetPlayAppCountriesIosInfoCountriesGetError()
