from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_contentstack_personalize_management_attributes_api import (
    ErrorContentstackPersonalizeManagementAttributesApi,
)

GetGeoRegionsErrorBody: TypeAlias = ErrorContentstackPersonalizeManagementAttributesApi | RawError


@dataclass(frozen=True, slots=True)
class _GetGeoRegionsError:
    def map(self, status_code: int, content: bytes) -> GetGeoRegionsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorContentstackPersonalizeManagementAttributesApi](content)
            case _:
                return RawError(status_code, content)


get_geo_regions_error_mapper: Final[ErrorMapper[GetGeoRegionsErrorBody]] = _GetGeoRegionsError()
