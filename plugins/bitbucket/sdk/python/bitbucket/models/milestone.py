from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links import Links, LinksDict


class Milestone(SdkBaseModel):
    """All Of object, milestone."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links] = UNSET
    name: Optional[str] = UNSET
    id: Optional[int] = UNSET


class MilestoneDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[LinksDict]
    name: NotRequired[str]
    id: NotRequired[int]
