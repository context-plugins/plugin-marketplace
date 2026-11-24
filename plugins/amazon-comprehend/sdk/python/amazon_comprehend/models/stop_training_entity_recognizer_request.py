from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopTrainingEntityRecognizerRequest(SdkBaseModel):
    entity_recognizer_arn: str = Field(alias="EntityRecognizerArn")
    """The Amazon Resource Name (ARN) that identifies the entity recognizer currently being trained."""


class StopTrainingEntityRecognizerRequestDict(TypedDict):
    entity_recognizer_arn: str
