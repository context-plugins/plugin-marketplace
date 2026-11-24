from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Organization(SdkBaseModel):
    """Organization metadata returned by the API."""

    id: Optional[str] = UNSET
    """The unique ID of the organization"""

    name: Optional[str] = UNSET
    """The name of the organization"""


class OrganizationDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
