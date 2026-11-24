from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.api_mode_amazon_lex_model_building_v2_testsets_api import ApiModeAmazonLexModelBuildingV2TestsetsApiOrStr
from .enums.test_execution_modality_amazon_lex_model_building_v2_testsets_api import (
    TestExecutionModalityAmazonLexModelBuildingV2TestsetsApiOrStr,
)
from .test_execution_target import TestExecutionTarget, TestExecutionTargetDict


class StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The test set Id for the test set execution."""

    target: TestExecutionTarget
    api_mode: ApiModeAmazonLexModelBuildingV2TestsetsApiOrStr = Field(alias="apiMode")
    """Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming,
    StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex
    Runtime API are used."""

    test_execution_modality: Optional[TestExecutionModalityAmazonLexModelBuildingV2TestsetsApiOrStr] = Field(
        default=UNSET, alias="testExecutionModality"
    )
    """Indicates whether audio or text is used."""


class StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict(TypedDict):
    test_set_id: str
    target: TestExecutionTargetDict
    api_mode: ApiModeAmazonLexModelBuildingV2TestsetsApiOrStr
    test_execution_modality: NotRequired[TestExecutionModalityAmazonLexModelBuildingV2TestsetsApiOrStr]
