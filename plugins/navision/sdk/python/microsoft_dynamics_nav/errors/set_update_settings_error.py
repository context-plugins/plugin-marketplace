from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_update_management_api import (
    ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi,
)

SetUpdateSettingsErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi | RawError


@dataclass(frozen=True, slots=True)
class _SetUpdateSettingsError:
    def map(self, status_code: int, content: bytes) -> SetUpdateSettingsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi](content)
            case _:
                return RawError(status_code, content)


set_update_settings_error_mapper: Final[ErrorMapper[SetUpdateSettingsErrorBody]] = _SetUpdateSettingsError()
