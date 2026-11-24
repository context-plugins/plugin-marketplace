from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_classifier import ContentClassifierOrStr


class HumanLoopDataAttributes(SdkBaseModel):
    content_classifiers: Optional[list[ContentClassifierOrStr]] = Field(default=UNSET, alias="ContentClassifiers")
    """Sets whether the input image is free of personally identifiable information."""


class HumanLoopDataAttributesDict(TypedDict):
    content_classifiers: NotRequired[list[ContentClassifierOrStr]]
