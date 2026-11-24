from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .logprob2 import Logprob2, Logprob2Dict


class ResponseTextDeltaEvent(SdkBaseModel):
    """Emitted when there is an additional text delta."""

    content_index: int
    delta: str
    item_id: str
    logprobs: list[Logprob2]
    output_index: int
    sequence_number: int
    type_: Literal["response.output_text.delta"] = Field(default="response.output_text.delta", alias="type")


class ResponseTextDeltaEventDict(TypedDict):
    content_index: int
    delta: str
    item_id: str
    logprobs: list[Logprob2Dict]
    output_index: int
    sequence_number: int
    type_: Literal["response.output_text.delta"]
