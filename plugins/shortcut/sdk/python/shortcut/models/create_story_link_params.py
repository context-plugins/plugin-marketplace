from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verb import VerbOrStr


class CreateStoryLinkParams(SdkBaseModel):
    """Request parameters for creating a Story Link within a Story."""

    model_config = ConfigDict(extra="forbid")

    subject_id: Optional[int] = UNSET
    """The unique ID of the Story defined as subject."""

    verb: VerbOrStr
    """How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to"."""

    object_id: Optional[int] = UNSET
    """The unique ID of the Story defined as object."""


class CreateStoryLinkParamsDict(TypedDict):
    subject_id: NotRequired[int]
    verb: VerbOrStr
    object_id: NotRequired[int]
