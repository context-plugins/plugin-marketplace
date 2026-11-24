from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .enums.attributes import AttributesOrStr


class CommitFile(SdkBaseModel):
    """A file object, representing a file at a commit in a repository"""

    type_: str = Field(alias="type")
    path: Optional[str] = UNSET
    """The path in the repository"""

    commit: Optional[Commit] = UNSET
    attributes: Optional[AttributesOrStr] = UNSET
    escaped_path: Optional[str] = UNSET
    """The escaped version of the path as it appears in a diff. If the path does not require escaping this will be the
    same as path."""


class CommitFileDict(TypedDict):
    type_: str
    path: NotRequired[str]
    commit: NotRequired[CommitDict]
    attributes: NotRequired[AttributesOrStr]
    escaped_path: NotRequired[str]
