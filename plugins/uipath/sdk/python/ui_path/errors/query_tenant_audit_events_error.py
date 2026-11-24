from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_platform_management_audit_logs_api import (
    ErrorResponseUiPathPlatformManagementAuditLogsApi,
)

QueryTenantAuditEventsErrorBody: TypeAlias = ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError


@dataclass(frozen=True, slots=True)
class _QueryTenantAuditEventsError:
    def map(self, status_code: int, content: bytes) -> QueryTenantAuditEventsErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseUiPathPlatformManagementAuditLogsApi](content)
            case _:
                return RawError(status_code, content)


query_tenant_audit_events_error_mapper: Final[
    ErrorMapper[QueryTenantAuditEventsErrorBody]
] = _QueryTenantAuditEventsError()
