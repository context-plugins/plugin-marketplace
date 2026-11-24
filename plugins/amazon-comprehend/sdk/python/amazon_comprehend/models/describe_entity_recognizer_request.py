from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeEntityRecognizerRequest(SdkBaseModel):
    entity_recognizer_arn: str = Field(alias="EntityRecognizerArn")
    """The Amazon Resource Name (ARN) that identifies the entity recognizer."""


class DescribeEntityRecognizerRequestDict(TypedDict):
    entity_recognizer_arn: str
