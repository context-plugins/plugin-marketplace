from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class OrganizationOverviewRequest(SdkBaseModel):
    from_time: RFC3339DateTime = Field(alias="FromTime")
    """The start of the time range passed in. The start time granularity is at the day level. The floor of the start
    time is used. Returned information occurred after this day."""

    to_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ToTime")
    """The end of the time range passed in. The start time granularity is at the day level. The floor of the start time
    is used. Returned information occurred before this day. If this is not specified, then the current day is used."""

    account_ids: Optional[list[str]] = Field(default=UNSET, alias="AccountIds")
    """The ID of the Amazon Web Services account."""

    organizational_unit_ids: Optional[list[str]] = Field(default=UNSET, alias="OrganizationalUnitIds")
    """The ID of the organizational unit."""


class OrganizationOverviewRequestDict(TypedDict):
    from_time: RFC3339DateTime
    to_time: NotRequired[RFC3339DateTime]
    account_ids: NotRequired[list[str]]
    organizational_unit_ids: NotRequired[list[str]]
