from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict


class TreeEntry(SdkBaseModel):
    """Base type for most resource objects. It defines the common ``type`` element that identifies an object's type. It
    also identifies the element as Swagger's ``discriminator``."""

    type_: str = Field(alias="type")
    path: Optional[str] = UNSET
    """The path in the repository"""

    commit: Optional[Commit] = UNSET


class TreeEntryDict(TypedDict):
    type_: str
    path: NotRequired[str]
    commit: NotRequired[CommitDict]
