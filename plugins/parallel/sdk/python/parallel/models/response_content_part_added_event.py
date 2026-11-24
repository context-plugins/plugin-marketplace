from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .response_output_text import ResponseOutputText, ResponseOutputTextDict


class ResponseContentPartAddedEvent(SdkBaseModel):
    content_index: int
    item_id: str
    output_index: int
    part: ResponseOutputText
    """A text content part of an output message. ``annotations`` carries the URL citations grounding the answer."""

    sequence_number: int
    type_: Literal["response.content_part.added"] = Field(default="response.content_part.added", alias="type")


class ResponseContentPartAddedEventDict(TypedDict):
    content_index: int
    item_id: str
    output_index: int
    part: ResponseOutputTextDict
    sequence_number: int
    type_: Literal["response.content_part.added"]
