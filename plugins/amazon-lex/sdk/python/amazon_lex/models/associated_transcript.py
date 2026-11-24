from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssociatedTranscript(SdkBaseModel):
    transcript: Optional[str] = UNSET
    """The content of the transcript that meets the search filter criteria. For the JSON format of the transcript, see
    Output transcript format."""


class AssociatedTranscriptDict(TypedDict):
    transcript: NotRequired[str]
