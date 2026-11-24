from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .report import Report, ReportDict


class ReportList(SdkBaseModel):
    """List of reports."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token. It is used to request a specific page of the list results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The number of returned records."""

    reports: Optional[list[Report]] = UNSET


class ReportListDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    reports: NotRequired[list[ReportDict]]
