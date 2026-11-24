from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.test_set_discrepancy_report_status import TestSetDiscrepancyReportStatusOrStr
from .test_set_discrepancy_errors import TestSetDiscrepancyErrors, TestSetDiscrepancyErrorsDict
from .test_set_discrepancy_report_resource_target import (
    TestSetDiscrepancyReportResourceTarget,
    TestSetDiscrepancyReportResourceTargetDict,
)


class DescribeTestSetDiscrepancyReportResponse(SdkBaseModel):
    test_set_discrepancy_report_id: Optional[str] = Field(default=UNSET, alias="testSetDiscrepancyReportId")
    """The unique identifier of the test set discrepancy report to describe."""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The test set Id for the test set discrepancy report."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The time and date of creation for the test set discrepancy report."""

    target: Optional[TestSetDiscrepancyReportResourceTarget] = UNSET
    test_set_discrepancy_report_status: Optional[TestSetDiscrepancyReportStatusOrStr] = Field(
        default=UNSET, alias="testSetDiscrepancyReportStatus"
    )
    """The status for the test set discrepancy report."""

    last_updated_data_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDataTime")
    """The date and time of the last update for the test set discrepancy report."""

    test_set_discrepancy_top_errors: Optional[TestSetDiscrepancyErrors] = Field(
        default=UNSET, alias="testSetDiscrepancyTopErrors"
    )
    test_set_discrepancy_raw_output_url: Optional[str] = Field(default=UNSET, alias="testSetDiscrepancyRawOutputUrl")
    """Pre-signed Amazon S3 URL to download the test set discrepancy report."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """The failure report for the test set discrepancy report generation action."""


class DescribeTestSetDiscrepancyReportResponseDict(TypedDict):
    test_set_discrepancy_report_id: NotRequired[str]
    test_set_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    target: NotRequired[TestSetDiscrepancyReportResourceTargetDict]
    test_set_discrepancy_report_status: NotRequired[TestSetDiscrepancyReportStatusOrStr]
    last_updated_data_time: NotRequired[RFC3339DateTime]
    test_set_discrepancy_top_errors: NotRequired[TestSetDiscrepancyErrorsDict]
    test_set_discrepancy_raw_output_url: NotRequired[str]
    failure_reasons: NotRequired[list[str]]
