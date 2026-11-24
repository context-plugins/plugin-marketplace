from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

CreateGroupErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateGroupError:
    def map(self, status_code: int, content: bytes) -> CreateGroupErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


create_group_error_mapper: Final[ErrorMapper[CreateGroupErrorBody]] = _CreateGroupError()
