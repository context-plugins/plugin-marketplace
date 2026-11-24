from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class AgentTranscribeRequest(SdkBaseModel):
    title: OptionalNullable[str] = UNSET
    url: str
    """https URL of an audio or video file."""


class AgentTranscribeRequestDict(TypedDict):
    title: NotRequired[str | None]
    url: str
