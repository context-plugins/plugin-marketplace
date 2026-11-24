from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class State(SdkBaseModel):
    """The starting state, if anything is already known"""

    current_state: OptionalNullable[str] = Field(default=UNSET, alias="currentState")
    """Where the work stands now, in a few sentences. Replaces the previous one"""

    open_questions: Optional[list[str]] = Field(default=UNSET, alias="openQuestions")
    """The full list of open questions, replacing the current one"""

    add_open_questions: Optional[list[str]] = Field(default=UNSET, alias="addOpenQuestions")
    """Questions to add to the list without restating it"""

    resolve_open_questions: Optional[list[str]] = Field(default=UNSET, alias="resolveOpenQuestions")
    """Questions that are now answered, to take off the list"""

    constraints: Optional[list[str]] = UNSET
    """What the work must respect, replacing the current list"""

    blocked_by: Optional[list[str]] = Field(default=UNSET, alias="blockedBy")
    """What is in the way right now, replacing the current list; empty when nothing is"""

    next_action: OptionalNullable[str] = Field(default=UNSET, alias="nextAction")
    """The single next step"""


class StateDict(TypedDict):
    current_state: NotRequired[str | None]
    open_questions: NotRequired[list[str]]
    add_open_questions: NotRequired[list[str]]
    resolve_open_questions: NotRequired[list[str]]
    constraints: NotRequired[list[str]]
    blocked_by: NotRequired[list[str]]
    next_action: NotRequired[str | None]
