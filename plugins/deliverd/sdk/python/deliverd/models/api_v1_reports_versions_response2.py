from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pending_approval import PendingApproval, PendingApprovalDict
from .version_deliverd_dev_reports_api import VersionDeliverdDevReportsApi, VersionDeliverdDevReportsApiDict


class ApiV1ReportsVersionsResponse2(SdkBaseModel):
    versions: list[VersionDeliverdDevReportsApi]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""

    current_version_id: UUID | None = Field(alias="currentVersionId")
    latest_version: float | None = Field(alias="latestVersion")
    """The newest version number, live or not. This is what ``expectedVersion`` compares against; after a declined
    publish it is ahead of the current version."""

    pending_approval: PendingApproval | None = Field(alias="pendingApproval")
    """The version waiting on an approver, if one is."""


class ApiV1ReportsVersionsResponse2Dict(TypedDict):
    versions: list[VersionDeliverdDevReportsApiDict]
    next_cursor: str | None
    current_version_id: UUID | None
    latest_version: float | None
    pending_approval: PendingApprovalDict | None
