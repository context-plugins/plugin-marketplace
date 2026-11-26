from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_app_management_api import (
    ErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
)

UninstallAppErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError


@dataclass(frozen=True, slots=True)
class _UninstallAppError:
    def map(self, status_code: int, content: bytes) -> UninstallAppErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](content)
            case _:
                return RawError(status_code, content)


uninstall_app_error_mapper: Final[ErrorMapper[UninstallAppErrorBody]] = _UninstallAppError()
