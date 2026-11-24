from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .test_set_discrepancy_report_resource_target import (
    TestSetDiscrepancyReportResourceTarget,
    TestSetDiscrepancyReportResourceTargetDict,
)


class CreateTestSetDiscrepancyReportResponse(SdkBaseModel):
    test_set_discrepancy_report_id: Optional[str] = Field(default=UNSET, alias="testSetDiscrepancyReportId")
    """The unique identifier of the test set discrepancy report to describe."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time for the test set discrepancy report."""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The test set Id for the test set discrepancy report."""

    target: Optional[TestSetDiscrepancyReportResourceTarget] = UNSET


class CreateTestSetDiscrepancyReportResponseDict(TypedDict):
    test_set_discrepancy_report_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    test_set_id: NotRequired[str]
    target: NotRequired[TestSetDiscrepancyReportResourceTargetDict]
