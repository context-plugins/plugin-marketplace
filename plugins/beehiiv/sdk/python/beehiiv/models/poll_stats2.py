from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PollStats2(SdkBaseModel):
    """Aggregate statistics for the poll. Only included when ``expand[]=stats`` is specified."""

    completions: int
    """The total number of responses to this poll."""

    vote_counts: dict[str, int]
    """A map of poll choice labels to the number of votes each choice received."""


class PollStats2Dict(TypedDict):
    completions: int
    vote_counts: dict[str, int]
