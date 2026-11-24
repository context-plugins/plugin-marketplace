from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartStreamProcessorResponse(SdkBaseModel):
    session_id: Optional[str] = Field(default=UNSET, alias="SessionId")
    """A unique identifier for the stream processing session."""


class StartStreamProcessorResponseDict(TypedDict):
    session_id: NotRequired[str]
