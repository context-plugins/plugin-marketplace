from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .blocked_resource1 import BlockedResource1, BlockedResource1Dict


class ResourceIssue(SdkBaseModel):
    """Information about a resource with issue."""

    blocked_resource: Optional[BlockedResource1] = Field(default=UNSET, alias="blockedResource")
    """Describes a blocked resource issue."""


class ResourceIssueDict(TypedDict):
    blocked_resource: NotRequired[BlockedResource1Dict]
