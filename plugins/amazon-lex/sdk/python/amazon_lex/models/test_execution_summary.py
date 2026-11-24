from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.api_mode1 import ApiMode1OrStr
from .enums.test_execution_modality1 import TestExecutionModality1OrStr
from .enums.test_execution_status1 import TestExecutionStatus1OrStr
from .test_execution_target import TestExecutionTarget, TestExecutionTargetDict


class TestExecutionSummary(SdkBaseModel):
    test_execution_id: Optional[str] = Field(default=UNSET, alias="testExecutionId")
    """The unique identifier of the test execution."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time at which the test execution was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time at which the test execution was last updated."""

    test_execution_status: Optional[TestExecutionStatus1OrStr] = Field(default=UNSET, alias="testExecutionStatus")
    """The current status of the test execution."""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The unique identifier of the test set used in the test execution."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The name of the test set used in the test execution."""

    target: Optional[TestExecutionTarget] = UNSET
    api_mode: Optional[ApiMode1OrStr] = Field(default=UNSET, alias="apiMode")
    """Specifies whether the API mode for the test execution is streaming or non-streaming."""

    test_execution_modality: Optional[TestExecutionModality1OrStr] = Field(default=UNSET, alias="testExecutionModality")
    """Specifies whether the data used for the test execution is written or spoken."""


class TestExecutionSummaryDict(TypedDict):
    test_execution_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    test_execution_status: NotRequired[TestExecutionStatus1OrStr]
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    target: NotRequired[TestExecutionTargetDict]
    api_mode: NotRequired[ApiMode1OrStr]
    test_execution_modality: NotRequired[TestExecutionModality1OrStr]
