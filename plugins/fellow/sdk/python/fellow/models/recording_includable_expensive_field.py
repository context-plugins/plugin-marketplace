from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class RecordingIncludableExpensiveField(SdkBaseModel):
    transcript: bool = False
    ai_notes: bool = False


class RecordingIncludableExpensiveFieldDict(TypedDict):
    transcript: NotRequired[bool]
    ai_notes: NotRequired[bool]
