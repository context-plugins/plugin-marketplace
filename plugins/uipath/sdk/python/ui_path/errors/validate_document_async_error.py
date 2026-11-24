from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

ValidateDocumentAsyncErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _ValidateDocumentAsyncError:
    def map(self, status_code: int, content: bytes) -> ValidateDocumentAsyncErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


validate_document_async_error_mapper: Final[ErrorMapper[ValidateDocumentAsyncErrorBody]] = _ValidateDocumentAsyncError()
