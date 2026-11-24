from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_ui_path_test_manager_test_executions_api import StatusUiPathTestManagerTestExecutionsApiOrStr


class TestExecution(SdkBaseModel):
    """A test set execution run with aggregated results"""

    id: Optional[str] = UNSET
    """Unique identifier of the test execution"""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """Identifier of the test set that was executed"""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """Display name of the test set that was executed"""

    status: Optional[StatusUiPathTestManagerTestExecutionsApiOrStr] = UNSET
    """Aggregate execution status"""

    started_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startedOn")
    """ISO 8601 timestamp when execution began"""

    finished_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="finishedOn")
    """ISO 8601 timestamp when execution completed"""

    total_test_cases: Optional[int] = Field(default=UNSET, alias="totalTestCases")
    """Total number of test cases in the execution"""

    passed_test_cases: Optional[int] = Field(default=UNSET, alias="passedTestCases")
    """Number of test cases that passed"""

    failed_test_cases: Optional[int] = Field(default=UNSET, alias="failedTestCases")
    """Number of test cases that failed"""

    blocked_test_cases: Optional[int] = Field(default=UNSET, alias="blockedTestCases")
    """Number of test cases that could not be executed"""


class TestExecutionDict(TypedDict):
    id: NotRequired[str]
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    status: NotRequired[StatusUiPathTestManagerTestExecutionsApiOrStr]
    started_on: NotRequired[RFC3339DateTime]
    finished_on: NotRequired[RFC3339DateTime]
    total_test_cases: NotRequired[int]
    passed_test_cases: NotRequired[int]
    failed_test_cases: NotRequired[int]
    blocked_test_cases: NotRequired[int]
