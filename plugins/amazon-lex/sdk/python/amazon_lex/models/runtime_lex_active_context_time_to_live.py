from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RuntimeLexActiveContextTimeToLive(SdkBaseModel):
    time_to_live_in_seconds: Optional[int] = Field(default=UNSET, alias="timeToLiveInSeconds")
    """The number of seconds that the context should be active after it is first sent in a PostContent or PostText
    response. You can set the value between 5 and 86,400 seconds (24 hours)."""

    turns_to_live: Optional[int] = Field(default=UNSET, alias="turnsToLive")
    """The number of conversation turns that the context should be active. A conversation turn is one PostContent or
    PostText request and the corresponding response from Amazon Lex."""


class RuntimeLexActiveContextTimeToLiveDict(TypedDict):
    time_to_live_in_seconds: NotRequired[int]
    turns_to_live: NotRequired[int]
