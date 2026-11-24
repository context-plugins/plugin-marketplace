from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_available import (
    ErrorResponseBusinessCentralAdministrationCenterAvailable,
)

ListAvailableCountriesErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterAvailable | RawError


@dataclass(frozen=True, slots=True)
class _ListAvailableCountriesError:
    def map(self, status_code: int, content: bytes) -> ListAvailableCountriesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterAvailable](content)
            case _:
                return RawError(status_code, content)


list_available_countries_error_mapper: Final[
    ErrorMapper[ListAvailableCountriesErrorBody]
] = _ListAvailableCountriesError()
