from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompletionResponse(SdkBaseModel):
    content: str
    model: str


class CompletionResponseDict(TypedDict):
    content: str
    model: str
