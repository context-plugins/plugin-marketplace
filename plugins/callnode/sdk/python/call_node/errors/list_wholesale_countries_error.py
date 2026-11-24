from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListWholesaleCountriesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListWholesaleCountriesError:
    def map(self, status_code: int, content: bytes) -> ListWholesaleCountriesErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_wholesale_countries_error_mapper: Final[
    ErrorMapper[ListWholesaleCountriesErrorBody]
] = _ListWholesaleCountriesError()
