from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListGeographicAccessCountriesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListGeographicAccessCountriesError:
    def map(self, status_code: int, content: bytes) -> ListGeographicAccessCountriesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_geographic_access_countries_error_mapper: Final[
    ErrorMapper[ListGeographicAccessCountriesErrorBody]
] = _ListGeographicAccessCountriesError()
