from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiCategory1(SdkBaseModel):
    """The API category resource."""

    name: Optional[str] = UNSET
    """Name of the category."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Time the category was last modified in milliseconds since epoch."""

    id: Optional[str] = UNSET
    """ID of the category (a UUID)."""

    site_id: Optional[str] = Field(default=UNSET, alias="siteId")
    """Name of the portal."""


class GoogleCloudApigeeV1ApiCategory1Dict(TypedDict):
    name: NotRequired[str]
    update_time: NotRequired[str]
    id: NotRequired[str]
    site_id: NotRequired[str]
