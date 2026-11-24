from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Organization(SdkBaseModel):
    """A Contentstack organization that groups stacks and users."""

    uid: Optional[str] = UNSET
    """Unique identifier of the organization."""

    name: Optional[str] = UNSET
    """Display name of the organization."""

    plan_id: Optional[str] = UNSET
    """The subscription plan identifier for the organization."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the organization was created."""


class OrganizationDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    plan_id: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
