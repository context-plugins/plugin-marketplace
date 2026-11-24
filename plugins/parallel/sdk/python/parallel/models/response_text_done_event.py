from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .logprob2 import Logprob2, Logprob2Dict


class ResponseTextDoneEvent(SdkBaseModel):
    """Emitted when text content is finalized."""

    content_index: int
    item_id: str
    logprobs: list[Logprob2]
    output_index: int
    sequence_number: int
    text: str
    type_: Literal["response.output_text.done"] = Field(default="response.output_text.done", alias="type")


class ResponseTextDoneEventDict(TypedDict):
    content_index: int
    item_id: str
    logprobs: list[Logprob2Dict]
    output_index: int
    sequence_number: int
    text: str
    type_: Literal["response.output_text.done"]
