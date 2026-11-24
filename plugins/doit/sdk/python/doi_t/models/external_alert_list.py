from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alert_list_item import AlertListItem, AlertListItemDict


class ExternalAlertList(SdkBaseModel):
    """List of alerts."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token. It is used to request a specific page of the list results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The number of returned records."""

    alerts: Optional[list[AlertListItem]] = UNSET
    """Array of alerts."""


class ExternalAlertListDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    alerts: NotRequired[list[AlertListItemDict]]
