from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteReportGroupInput(SdkBaseModel):
    arn: str
    """The ARN of the report group to delete."""

    delete_reports: Optional[bool] = Field(default=UNSET, alias="deleteReports")
    """If true, deletes any reports that belong to a report group before deleting the report group. If false, you must
    delete any reports in the report group. Use ListReportsForReportGroup to get the reports in a report group. Use
    DeleteReport to delete the reports. If you call DeleteReportGroup for a report group that contains one or more
    reports, an exception is thrown."""


class DeleteReportGroupInputDict(TypedDict):
    arn: str
    delete_reports: NotRequired[bool]
