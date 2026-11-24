from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.poll_status2 import PollStatus2OrStr
from .enums.poll_type1 import PollType1OrStr
from .poll_choice import PollChoice, PollChoiceDict
from .poll_response_item import PollResponseItem, PollResponseItemDict
from .poll_stats2 import PollStats2, PollStats2Dict


class Poll(SdkBaseModel):
    id: str
    """The prefixed ID of the poll."""

    name: str
    """The name of the poll."""

    question: str
    """The poll question text."""

    description: Optional[str] = UNSET
    """An optional description of the poll."""

    poll_type: PollType1OrStr
    """The type of poll."""

    status: PollStatus2OrStr
    """The current status of the poll."""

    created_at: int
    """The time the poll was created. Measured in seconds since the Unix epoch."""

    poll_choices: list[PollChoice]
    """The available choices for this poll."""

    trivia_answer: Optional[str] = UNSET
    """The correct answer for trivia-type polls. Only included when ``expand[]=trivia_answer`` is specified and the poll
    is of type trivia."""

    stats: Optional[PollStats2] = UNSET
    """Aggregate statistics for the poll. Only included when ``expand[]=stats`` is specified."""

    total_responses: Optional[int] = UNSET
    """Total number of responses to this poll. Only included when ``expand[]=poll_responses`` is specified."""

    poll_responses: Optional[list[PollResponseItem]] = UNSET
    """Up to 10 most recent subscriber responses. Only included when ``expand[]=poll_responses`` is specified. Use
    /polls/{pollId}/responses for paginated access to all responses."""


class PollDict(TypedDict):
    id: str
    name: str
    question: str
    description: NotRequired[str]
    poll_type: PollType1OrStr
    status: PollStatus2OrStr
    created_at: int
    poll_choices: list[PollChoiceDict]
    trivia_answer: NotRequired[str]
    stats: NotRequired[PollStats2Dict]
    total_responses: NotRequired[int]
    poll_responses: NotRequired[list[PollResponseItemDict]]
