from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopStreamProcessorRequest(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of a stream processor created by CreateStreamProcessor."""


class StopStreamProcessorRequestDict(TypedDict):
    name: str
