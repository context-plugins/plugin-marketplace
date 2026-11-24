from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeTestSetDiscrepancyReportRequest(SdkBaseModel):
    test_set_discrepancy_report_id: str = Field(alias="testSetDiscrepancyReportId")
    """The unique identifier of the test set discrepancy report."""


class DescribeTestSetDiscrepancyReportRequestDict(TypedDict):
    test_set_discrepancy_report_id: str
