from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .experience import Experience, ExperienceDict


class ExperienceList(SdkBaseModel):
    """A list of personalization experiences."""

    data: Optional[list[Experience]] = UNSET
    """Array of experience objects."""


class ExperienceListDict(TypedDict):
    data: NotRequired[list[ExperienceDict]]
