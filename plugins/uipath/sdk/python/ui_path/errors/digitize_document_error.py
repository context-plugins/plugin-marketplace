from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

DigitizeDocumentErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _DigitizeDocumentError:
    def map(self, status_code: int, content: bytes) -> DigitizeDocumentErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


digitize_document_error_mapper: Final[ErrorMapper[DigitizeDocumentErrorBody]] = _DigitizeDocumentError()
