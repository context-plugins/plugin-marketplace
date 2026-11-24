from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .response_output_message import ResponseOutputMessage, ResponseOutputMessageDict


class ResponseOutputItemDoneEvent(SdkBaseModel):
    item: ResponseOutputMessage
    """An assistant message produced by the model."""

    output_index: int
    sequence_number: int
    type_: Literal["response.output_item.done"] = Field(default="response.output_item.done", alias="type")


class ResponseOutputItemDoneEventDict(TypedDict):
    item: ResponseOutputMessageDict
    output_index: int
    sequence_number: int
    type_: Literal["response.output_item.done"]
