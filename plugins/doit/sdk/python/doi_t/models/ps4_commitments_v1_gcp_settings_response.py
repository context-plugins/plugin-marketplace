from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .gcp_billing_account_settings_item import GcpBillingAccountSettingsItem, GcpBillingAccountSettingsItemDict


class Ps4CommitmentsV1GcpSettingsResponse(SdkBaseModel):
    items: list[GcpBillingAccountSettingsItem]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Opaque cursor for the next page. Absent when this is the last page."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Number of items returned in this page."""


class Ps4CommitmentsV1GcpSettingsResponseDict(TypedDict):
    items: list[GcpBillingAccountSettingsItemDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int]
