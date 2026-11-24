from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .code_coverage_report_summary import CodeCoverageReportSummary, CodeCoverageReportSummaryDict
from .enums.status4 import Status4OrStr
from .enums.type10 import Type10OrStr
from .report_export_config import ReportExportConfig, ReportExportConfigDict
from .test_report_summary import TestReportSummary, TestReportSummaryDict


class Report(SdkBaseModel):
    arn: Optional[str] = UNSET
    """The ARN of the report run."""

    type_: Optional[Type10OrStr] = Field(default=UNSET, alias="type")
    """The type of the report that was run. CODE_COVERAGE A code coverage report. TEST A test report."""

    name: Optional[str] = UNSET
    """The name of the report that was run."""

    report_group_arn: Optional[str] = Field(default=UNSET, alias="reportGroupArn")
    """The ARN of the report group associated with this report."""

    execution_id: Optional[str] = Field(default=UNSET, alias="executionId")
    """The ARN of the build run that generated this report."""

    status: Optional[Status4OrStr] = UNSET
    """The status of this report."""

    created: Optional[RFC3339DateTime] = UNSET
    """The date and time this report run occurred."""

    expired: Optional[RFC3339DateTime] = UNSET
    """The date and time a report expires. A report expires 30 days after it is created. An expired report is not
    available to view in CodeBuild."""

    export_config: Optional[ReportExportConfig] = Field(default=UNSET, alias="exportConfig")
    truncated: Optional[bool] = UNSET
    """A boolean that specifies if this report run is truncated. The list of test cases is truncated after the maximum
    number of test cases is reached."""

    test_summary: Optional[TestReportSummary] = Field(default=UNSET, alias="testSummary")
    code_coverage_summary: Optional[CodeCoverageReportSummary] = Field(default=UNSET, alias="codeCoverageSummary")


class ReportDict(TypedDict):
    arn: NotRequired[str]
    type_: NotRequired[Type10OrStr]
    name: NotRequired[str]
    report_group_arn: NotRequired[str]
    execution_id: NotRequired[str]
    status: NotRequired[Status4OrStr]
    created: NotRequired[RFC3339DateTime]
    expired: NotRequired[RFC3339DateTime]
    export_config: NotRequired[ReportExportConfigDict]
    truncated: NotRequired[bool]
    test_summary: NotRequired[TestReportSummaryDict]
    code_coverage_summary: NotRequired[CodeCoverageReportSummaryDict]
