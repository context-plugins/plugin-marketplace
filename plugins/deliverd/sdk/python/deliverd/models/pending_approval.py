from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PendingApproval(SdkBaseModel):
    """The version waiting on an approver, if one is."""

    id: UUID
    version_number: float = Field(alias="versionNumber")
    since: str


class PendingApprovalDict(TypedDict):
    id: UUID
    version_number: float
    since: str
