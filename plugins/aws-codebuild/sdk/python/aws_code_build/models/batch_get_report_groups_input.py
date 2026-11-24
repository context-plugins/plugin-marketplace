from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetReportGroupsInput(SdkBaseModel):
    report_group_arns: list[str] = Field(alias="reportGroupArns")
    """An array of report group ARNs that identify the report groups to return."""


class BatchGetReportGroupsInputDict(TypedDict):
    report_group_arns: list[str]
