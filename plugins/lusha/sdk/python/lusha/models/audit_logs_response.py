from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .audit_log_entry import AuditLogEntry, AuditLogEntryDict
from .pagination_response import PaginationResponse, PaginationResponseDict


class AuditLogsResponse(SdkBaseModel):
    data: list[AuditLogEntry]
    pagination: PaginationResponse


class AuditLogsResponseDict(TypedDict):
    data: list[AuditLogEntryDict]
    pagination: PaginationResponseDict
