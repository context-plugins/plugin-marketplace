from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

UpdateGroupLicenseAllocationErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _UpdateGroupLicenseAllocationError:
    def map(self, status_code: int, content: bytes) -> UpdateGroupLicenseAllocationErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


update_group_license_allocation_error_mapper: Final[
    ErrorMapper[UpdateGroupLicenseAllocationErrorBody]
] = _UpdateGroupLicenseAllocationError()
