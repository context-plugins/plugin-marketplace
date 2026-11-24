from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateEntityRecognizerResponse(SdkBaseModel):
    entity_recognizer_arn: Optional[str] = Field(default=UNSET, alias="EntityRecognizerArn")
    """The Amazon Resource Name (ARN) that identifies the entity recognizer."""


class CreateEntityRecognizerResponseDict(TypedDict):
    entity_recognizer_arn: NotRequired[str]
