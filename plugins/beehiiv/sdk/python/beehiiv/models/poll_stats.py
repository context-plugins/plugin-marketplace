from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PollStats(SdkBaseModel):
    completions: int
    """The total number of responses to this poll."""

    vote_counts: dict[str, int]
    """A map of poll choice labels to the number of votes each choice received."""


class PollStatsDict(TypedDict):
    completions: int
    vote_counts: dict[str, int]
