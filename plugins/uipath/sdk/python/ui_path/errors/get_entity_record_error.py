from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

GetEntityRecordErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _GetEntityRecordError:
    def map(self, status_code: int, content: bytes) -> GetEntityRecordErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


get_entity_record_error_mapper: Final[ErrorMapper[GetEntityRecordErrorBody]] = _GetEntityRecordError()
