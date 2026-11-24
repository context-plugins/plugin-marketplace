from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .priority import Priority, PriorityDict


class ResourceResultEnhancement(SdkBaseModel):
    """DoiT-managed metadata associated with a resource result."""

    tags: Optional[list[str]] = UNSET
    """Tags assigned to this resource result."""

    priority: Optional[Priority] = UNSET
    """Priority information for this resource result."""

    last_updated_by: Optional[str] = Field(default=UNSET, alias="lastUpdatedBy")
    """The user who last updated this enhancement."""

    last_updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedAt")
    """Timestamp of the last update."""


class ResourceResultEnhancementDict(TypedDict):
    tags: NotRequired[list[str]]
    priority: NotRequired[PriorityDict]
    last_updated_by: NotRequired[str]
    last_updated_at: NotRequired[RFC3339DateTime]
