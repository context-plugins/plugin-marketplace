from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_countries401_error1 import ApiV2NumbersCountries401Error1
from ..models.api_v2_numbers_countries403_error1 import ApiV2NumbersCountries403Error1

NumbersCountriesIndexErrorBody: TypeAlias = ApiV2NumbersCountries401Error1 | ApiV2NumbersCountries403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _NumbersCountriesIndexError:
    def map(self, status_code: int, content: bytes) -> NumbersCountriesIndexErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersCountries401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersCountries403Error1](content)
            case _:
                return RawError(status_code, content)


numbers_countries_index_error_mapper: Final[ErrorMapper[NumbersCountriesIndexErrorBody]] = _NumbersCountriesIndexError()
