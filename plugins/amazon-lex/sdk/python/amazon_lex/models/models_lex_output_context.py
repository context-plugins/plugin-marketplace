from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexOutputContext(SdkBaseModel):
    name: str
    """The name of the context."""

    time_to_live_in_seconds: int = Field(alias="timeToLiveInSeconds")
    """The number of seconds that the context should be active after it is first sent in a PostContent or PostText
    response. You can set the value between 5 and 86,400 seconds (24 hours)."""

    turns_to_live: int = Field(alias="turnsToLive")
    """The number of conversation turns that the context should be active. A conversation turn is one PostContent or
    PostText request and the corresponding response from Amazon Lex."""


class ModelsLexOutputContextDict(TypedDict):
    name: str
    time_to_live_in_seconds: int
    turns_to_live: int
