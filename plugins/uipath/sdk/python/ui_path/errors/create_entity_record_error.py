from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

CreateEntityRecordErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateEntityRecordError:
    def map(self, status_code: int, content: bytes) -> CreateEntityRecordErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


create_entity_record_error_mapper: Final[ErrorMapper[CreateEntityRecordErrorBody]] = _CreateEntityRecordError()
