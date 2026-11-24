from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

GetGeoCountriesErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _GetGeoCountriesError:
    def map(self, status_code: int, content: bytes) -> GetGeoCountriesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


get_geo_countries_error_mapper: Final[ErrorMapper[GetGeoCountriesErrorBody]] = _GetGeoCountriesError()
