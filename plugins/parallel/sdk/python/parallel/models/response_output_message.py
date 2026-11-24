from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.phase import PhaseOrStr
from .enums.status_parallel_ai_responses_api import StatusParallelAiResponsesApiOrStr
from .response_output_text import ResponseOutputText, ResponseOutputTextDict


class ResponseOutputMessage(SdkBaseModel):
    """An assistant message produced by the model."""

    id: str
    content: list[ResponseOutputText]
    role: Literal["assistant"] = "assistant"
    status: StatusParallelAiResponsesApiOrStr
    type_: Literal["message"] = Field(default="message", alias="type")
    phase: Optional[PhaseOrStr] = UNSET


class ResponseOutputMessageDict(TypedDict):
    id: str
    content: list[ResponseOutputTextDict]
    role: Literal["assistant"]
    status: StatusParallelAiResponsesApiOrStr
    type_: Literal["message"]
    phase: NotRequired[PhaseOrStr]
