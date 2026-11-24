from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TestCase(SdkBaseModel):
    report_arn: Optional[str] = Field(default=UNSET, alias="reportArn")
    """The ARN of the report to which the test case belongs."""

    test_raw_data_path: Optional[str] = Field(default=UNSET, alias="testRawDataPath")
    """The path to the raw data file that contains the test result."""

    prefix: Optional[str] = UNSET
    """A string that is applied to a series of related test cases. CodeBuild generates the prefix. The prefix depends on
    the framework used to generate the tests."""

    name: Optional[str] = UNSET
    """The name of the test case."""

    status: Optional[str] = UNSET
    """The status returned by the test case after it was run. Valid statuses are SUCCEEDED, FAILED, ERROR, SKIPPED, and
    UNKNOWN."""

    duration_in_nano_seconds: Optional[int] = Field(default=UNSET, alias="durationInNanoSeconds")
    """The number of nanoseconds it took to run this test case."""

    message: Optional[str] = UNSET
    """A message associated with a test case. For example, an error message or stack trace."""

    expired: Optional[RFC3339DateTime] = UNSET
    """The date and time a test case expires. A test case expires 30 days after it is created. An expired test case is
    not available to view in CodeBuild."""

    test_suite_name: Optional[str] = Field(default=UNSET, alias="testSuiteName")
    """The name of the test suite that the test case is a part of."""


class TestCaseDict(TypedDict):
    report_arn: NotRequired[str]
    test_raw_data_path: NotRequired[str]
    prefix: NotRequired[str]
    name: NotRequired[str]
    status: NotRequired[str]
    duration_in_nano_seconds: NotRequired[int]
    message: NotRequired[str]
    expired: NotRequired[RFC3339DateTime]
    test_suite_name: NotRequired[str]
