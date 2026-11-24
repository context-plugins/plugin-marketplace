from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.api_mode2 import ApiMode2OrStr
from .enums.test_execution_modality2 import TestExecutionModality2OrStr
from .test_execution_target import TestExecutionTarget, TestExecutionTargetDict


class StartTestExecutionRequest(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The test set Id for the test set execution."""

    target: TestExecutionTarget
    api_mode: ApiMode2OrStr = Field(alias="apiMode")
    """Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming,
    StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex
    Runtime API are used."""

    test_execution_modality: Optional[TestExecutionModality2OrStr] = Field(default=UNSET, alias="testExecutionModality")
    """Indicates whether audio or text is used."""


class StartTestExecutionRequestDict(TypedDict):
    test_set_id: str
    target: TestExecutionTargetDict
    api_mode: ApiMode2OrStr
    test_execution_modality: NotRequired[TestExecutionModality2OrStr]
