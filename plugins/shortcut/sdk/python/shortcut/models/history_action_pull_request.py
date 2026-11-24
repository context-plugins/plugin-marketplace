from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.action import ActionOrStr


class HistoryActionPullRequest(SdkBaseModel):
    """An action representing various operations for a Pull Request."""

    id: int
    """The ID of the entity referenced."""

    entity_type: str
    """The type of entity referenced."""

    action: ActionOrStr
    """The action of the entity referenced."""

    number: int
    """The VCS Repository-specific ID for the Pull Request."""

    title: str
    """The title of the Pull Request."""

    url: str
    """The URL from the provider of the VCS Pull Request."""


class HistoryActionPullRequestDict(TypedDict):
    id: int
    entity_type: str
    action: ActionOrStr
    number: int
    title: str
    url: str
