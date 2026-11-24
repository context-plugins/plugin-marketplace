from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_support_settings_api import (
    ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi,
)

GetSupportSettingsErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetSupportSettingsError:
    def map(self, status_code: int, content: bytes) -> GetSupportSettingsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi](content)
            case _:
                return RawError(status_code, content)


get_support_settings_error_mapper: Final[ErrorMapper[GetSupportSettingsErrorBody]] = _GetSupportSettingsError()
