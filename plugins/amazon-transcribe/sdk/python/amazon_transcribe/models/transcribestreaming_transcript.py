from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result import Result, ResultDict


class TranscribestreamingTranscript(SdkBaseModel):
    results: Optional[list[Result]] = Field(default=UNSET, alias="Results")
    """Contains a set of transcription results from one or more audio segments, along with additional information per
    your request parameters. This can include information relating to alternative transcriptions, channel
    identification, partial result stabilization, language identification, and other transcription-related data."""


class TranscribestreamingTranscriptDict(TypedDict):
    results: NotRequired[list[ResultDict]]
