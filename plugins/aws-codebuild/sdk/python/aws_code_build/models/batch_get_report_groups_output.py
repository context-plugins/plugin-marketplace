from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .report_group import ReportGroup, ReportGroupDict


class BatchGetReportGroupsOutput(SdkBaseModel):
    report_groups: Optional[list[ReportGroup]] = Field(default=UNSET, alias="reportGroups")
    """The array of report groups returned by BatchGetReportGroups."""

    report_groups_not_found: Optional[list[str]] = Field(default=UNSET, alias="reportGroupsNotFound")
    """An array of ARNs passed to BatchGetReportGroups that are not associated with a ReportGroup."""


class BatchGetReportGroupsOutputDict(TypedDict):
    report_groups: NotRequired[list[ReportGroupDict]]
    report_groups_not_found: NotRequired[list[str]]
