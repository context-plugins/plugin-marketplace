from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_doi_t_reports_api import TypeDoiTReportsApiOrStr
from .label_info import LabelInfo, LabelInfoDict
from .result1 import Result1, Result1Dict


class GetReportResponse(SdkBaseModel):
    """Results returned when running a report; includes schema and rows."""

    id: Optional[str] = UNSET
    """Report ID."""

    report_name: Optional[str] = Field(default=UNSET, alias="reportName")
    """The name of the report."""

    owner: Optional[str] = UNSET
    """Email address of the report owner."""

    type_: Optional[TypeDoiTReportsApiOrStr] = Field(default=UNSET, alias="type")
    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The creation time of the report, in milliseconds since the epoch."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """The time when this report was last updated, in milliseconds since the epoch."""

    url_ui: Optional[str] = Field(default=UNSET, alias="urlUI")
    """The URL of the report in DoiT console."""

    labels: Optional[list[LabelInfo]] = UNSET
    """List of labels associated with the report."""

    result: Optional[Result1] = UNSET


class GetReportResponseDict(TypedDict):
    id: NotRequired[str]
    report_name: NotRequired[str]
    owner: NotRequired[str]
    type_: NotRequired[TypeDoiTReportsApiOrStr]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    url_ui: NotRequired[str]
    labels: NotRequired[list[LabelInfoDict]]
    result: NotRequired[Result1Dict]
