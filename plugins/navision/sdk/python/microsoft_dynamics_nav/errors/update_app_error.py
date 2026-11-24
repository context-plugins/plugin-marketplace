from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_business_central_administration_center_app_management_api import (
    ErrorResponseBusinessCentralAdministrationCenterAppManagementApi,
)

UpdateAppErrorBody: TypeAlias = ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError


@dataclass(frozen=True, slots=True)
class _UpdateAppError:
    def map(self, status_code: int, content: bytes) -> UpdateAppErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseBusinessCentralAdministrationCenterAppManagementApi](content)
            case _:
                return RawError(status_code, content)


update_app_error_mapper: Final[ErrorMapper[UpdateAppErrorBody]] = _UpdateAppError()
