from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.api_mode import ApiModeOrStr
from .enums.test_execution_modality import TestExecutionModalityOrStr
from .enums.test_execution_status import TestExecutionStatusOrStr
from .test_execution_target import TestExecutionTarget, TestExecutionTargetDict


class DescribeTestExecutionResponse(SdkBaseModel):
    test_execution_id: Optional[str] = Field(default=UNSET, alias="testExecutionId")
    """The execution Id for the test set execution."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The execution creation date and time for the test set execution."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time of the last update for the execution."""

    test_execution_status: Optional[TestExecutionStatusOrStr] = Field(default=UNSET, alias="testExecutionStatus")
    """The test execution status for the test execution."""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The test set Id for the test set execution."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The test set name of the test set execution."""

    target: Optional[TestExecutionTarget] = UNSET
    api_mode: Optional[ApiModeOrStr] = Field(default=UNSET, alias="apiMode")
    """Indicates whether we use streaming or non-streaming APIs are used for the test set execution. For streaming,
    StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText
    Amazon Lex Runtime API is used."""

    test_execution_modality: Optional[TestExecutionModalityOrStr] = Field(default=UNSET, alias="testExecutionModality")
    """Indicates whether test set is audio or text."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """Reasons for the failure of the test set execution."""


class DescribeTestExecutionResponseDict(TypedDict):
    test_execution_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    test_execution_status: NotRequired[TestExecutionStatusOrStr]
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    target: NotRequired[TestExecutionTargetDict]
    api_mode: NotRequired[ApiModeOrStr]
    test_execution_modality: NotRequired[TestExecutionModalityOrStr]
    failure_reasons: NotRequired[list[str]]
