from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BedrockKnowledgeStoreExactResponseFields(SdkBaseModel):
    answer_field: Optional[str] = Field(default=UNSET, alias="answerField")
    """The answer field used for an exact response from Bedrock Knowledge Store."""


class BedrockKnowledgeStoreExactResponseFieldsDict(TypedDict):
    answer_field: NotRequired[str]
