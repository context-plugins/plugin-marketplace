from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PullRequestLabel(SdkBaseModel):
    """Corresponds to a VCS Label associated with a Pull Request."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    id: int
    """The unique ID of the VCS Label."""

    color: str
    """The color of the VCS label."""

    description: OptionalNullable[str] = UNSET
    """The description of the VCS label."""

    name: str
    """The name of the VCS label."""


class PullRequestLabelDict(TypedDict):
    entity_type: str
    id: int
    color: str
    description: NotRequired[str | None]
    name: str
