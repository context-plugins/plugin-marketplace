from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PollChoice(SdkBaseModel):
    id: str
    """The unique identifier of the poll choice."""

    label: str
    """The text label for this choice."""


class PollChoiceDict(TypedDict):
    id: str
    label: str
