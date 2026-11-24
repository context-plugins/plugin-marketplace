from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TextSegment(SdkBaseModel):
    text: str = Field(alias="Text")
    """The text content."""


class TextSegmentDict(TypedDict):
    text: str
