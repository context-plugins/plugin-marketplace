from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.automation_status import AutomationStatusOrStr
from .enums.status_ui_path_test_manager_test_cases_api import StatusUiPathTestManagerTestCasesApiOrStr


class TestCase(SdkBaseModel):
    """A test case definition within a test project"""

    id: Optional[str] = UNSET
    """Unique identifier of the test case"""

    name: Optional[str] = UNSET
    """Display name of the test case"""

    description: Optional[str] = UNSET
    """Description of the test scenario"""

    status: Optional[StatusUiPathTestManagerTestCasesApiOrStr] = UNSET
    """Lifecycle status of the test case"""

    automation_status: Optional[AutomationStatusOrStr] = Field(default=UNSET, alias="automationStatus")
    """Whether the test case is linked to an automated robot process"""

    labels: Optional[list[str]] = UNSET
    """Labels applied to the test case for filtering and grouping"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """ISO 8601 timestamp when the test case was created"""


class TestCaseDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    status: NotRequired[StatusUiPathTestManagerTestCasesApiOrStr]
    automation_status: NotRequired[AutomationStatusOrStr]
    labels: NotRequired[list[str]]
    created_on: NotRequired[RFC3339DateTime]
