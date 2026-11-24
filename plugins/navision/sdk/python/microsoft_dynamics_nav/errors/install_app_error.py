from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_app_management_api import (
    ErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
)

InstallAppErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError


@dataclass(frozen=True, slots=True)
class _InstallAppError:
    def map(self, status_code: int, content: bytes) -> InstallAppErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](content)
            case _:
                return RawError(status_code, content)


install_app_error_mapper: Final[ErrorMapper[InstallAppErrorBody]] = _InstallAppError()
