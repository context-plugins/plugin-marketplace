from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links import Links, LinksDict


class Version(SdkBaseModel):
    """All Of object, version."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links] = UNSET
    name: Optional[str] = UNSET
    id: Optional[int] = UNSET


class VersionDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[LinksDict]
    name: NotRequired[str]
    id: NotRequired[int]
