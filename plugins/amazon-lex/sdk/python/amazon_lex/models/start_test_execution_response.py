from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.api_mode3 import ApiMode3OrStr
from .enums.test_execution_modality2 import TestExecutionModality2OrStr
from .test_execution_target import TestExecutionTarget, TestExecutionTargetDict


class StartTestExecutionResponse(SdkBaseModel):
    test_execution_id: Optional[str] = Field(default=UNSET, alias="testExecutionId")
    """The unique identifier of the test set execution."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time for the test set execution."""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The test set Id for the test set execution."""

    target: Optional[TestExecutionTarget] = UNSET
    api_mode: Optional[ApiMode3OrStr] = Field(default=UNSET, alias="apiMode")
    """Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming,
    StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText
    Amazon Lex Runtime API are used."""

    test_execution_modality: Optional[TestExecutionModality2OrStr] = Field(default=UNSET, alias="testExecutionModality")
    """Indicates whether audio or text is used."""


class StartTestExecutionResponseDict(TypedDict):
    test_execution_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    test_set_id: NotRequired[str]
    target: NotRequired[TestExecutionTargetDict]
    api_mode: NotRequired[ApiMode3OrStr]
    test_execution_modality: NotRequired[TestExecutionModality2OrStr]
