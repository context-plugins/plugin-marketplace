from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Report(SdkBaseModel):
    """The shareable report for this result (create_report: true), or null when none was made."""

    expires_at: Optional[RFC3339DateTime] = UNSET
    """When the link stops resolving unless revoked or deleted sooner."""

    id: Optional[str] = UNSET
    """AI detector history entry id."""

    shared_at: Optional[RFC3339DateTime] = UNSET
    url: Optional[str] = UNSET
    """Public report link."""


class ReportDict(TypedDict):
    expires_at: NotRequired[RFC3339DateTime]
    id: NotRequired[str]
    shared_at: NotRequired[RFC3339DateTime]
    url: NotRequired[str]
