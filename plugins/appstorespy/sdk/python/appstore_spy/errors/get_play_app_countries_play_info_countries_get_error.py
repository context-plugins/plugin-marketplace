from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.play_info_countries401_error1 import PlayInfoCountries401Error1

GetPlayAppCountriesPlayInfoCountriesGetErrorBody: TypeAlias = PlayInfoCountries401Error1 | str | RawError


@dataclass(frozen=True, slots=True)
class _GetPlayAppCountriesPlayInfoCountriesGetError:
    def map(self, status_code: int, content: bytes) -> GetPlayAppCountriesPlayInfoCountriesGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayInfoCountries401Error1](content)
            case 402:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_play_app_countries_play_info_countries_get_error_mapper: Final[
    ErrorMapper[GetPlayAppCountriesPlayInfoCountriesGetErrorBody]
] = _GetPlayAppCountriesPlayInfoCountriesGetError()
