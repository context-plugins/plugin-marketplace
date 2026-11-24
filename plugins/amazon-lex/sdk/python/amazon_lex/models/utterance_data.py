from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UtteranceData(SdkBaseModel):
    utterance_string: Optional[str] = Field(default=UNSET, alias="utteranceString")
    """The text that was entered by the user or the text representation of an audio clip."""

    count: Optional[int] = UNSET
    """The number of times that the utterance was processed."""

    distinct_users: Optional[int] = Field(default=UNSET, alias="distinctUsers")
    """The total number of individuals that used the utterance."""

    first_uttered_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="firstUtteredDate")
    """The date that the utterance was first recorded."""

    last_uttered_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUtteredDate")
    """The date that the utterance was last recorded."""


class UtteranceDataDict(TypedDict):
    utterance_string: NotRequired[str]
    count: NotRequired[int]
    distinct_users: NotRequired[int]
    first_uttered_date: NotRequired[RFC3339DateTime]
    last_uttered_date: NotRequired[RFC3339DateTime]
