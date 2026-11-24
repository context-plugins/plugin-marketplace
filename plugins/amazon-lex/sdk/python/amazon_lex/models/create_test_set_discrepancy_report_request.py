from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .test_set_discrepancy_report_resource_target import (
    TestSetDiscrepancyReportResourceTarget,
    TestSetDiscrepancyReportResourceTargetDict,
)


class CreateTestSetDiscrepancyReportRequest(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The test set Id for the test set discrepancy report."""

    target: TestSetDiscrepancyReportResourceTarget


class CreateTestSetDiscrepancyReportRequestDict(TypedDict):
    test_set_id: str
    target: TestSetDiscrepancyReportResourceTargetDict
