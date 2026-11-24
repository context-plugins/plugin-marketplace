from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .report_group import ReportGroup, ReportGroupDict


class CreateReportGroupOutput(SdkBaseModel):
    report_group: Optional[ReportGroup] = Field(default=UNSET, alias="reportGroup")


class CreateReportGroupOutputDict(TypedDict):
    report_group: NotRequired[ReportGroupDict]
