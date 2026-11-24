from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IterationAssociatedGroup(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    group_id: UUID
    """The Group ID of the associated group."""

    associated_stories_count: Optional[int] = UNSET
    """The number of stories this Group owns in the Iteration."""


class IterationAssociatedGroupDict(TypedDict):
    group_id: UUID
    associated_stories_count: NotRequired[int]
