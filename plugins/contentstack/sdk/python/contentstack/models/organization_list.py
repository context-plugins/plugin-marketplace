from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .organization import Organization, OrganizationDict


class OrganizationList(SdkBaseModel):
    """A list of organizations."""

    organizations: Optional[list[Organization]] = UNSET
    """Array of organization objects."""


class OrganizationListDict(TypedDict):
    organizations: NotRequired[list[OrganizationDict]]
