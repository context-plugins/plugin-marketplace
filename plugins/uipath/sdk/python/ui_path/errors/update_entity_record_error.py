from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

UpdateEntityRecordErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _UpdateEntityRecordError:
    def map(self, status_code: int, content: bytes) -> UpdateEntityRecordErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


update_entity_record_error_mapper: Final[ErrorMapper[UpdateEntityRecordErrorBody]] = _UpdateEntityRecordError()
