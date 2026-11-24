from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .aws_organization_settings_item import AwsOrganizationSettingsItem, AwsOrganizationSettingsItemDict


class Ps4CommitmentsV1AwsSettingsResponse(SdkBaseModel):
    items: list[AwsOrganizationSettingsItem]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Opaque cursor for the next page. Absent when this is the last page."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Number of items returned in this page."""


class Ps4CommitmentsV1AwsSettingsResponseDict(TypedDict):
    items: list[AwsOrganizationSettingsItemDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int]
