from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit_file import CommitFile, CommitFileDict
from .enums.status import StatusOrStr


class DiffStat(SdkBaseModel):
    """A diffstat object that includes a summary of changes made to a file between two commits."""

    type_: str = Field(alias="type")
    status: Optional[StatusOrStr] = UNSET
    lines_added: Optional[int] = UNSET
    lines_removed: Optional[int] = UNSET
    old: Optional[CommitFile] = UNSET
    """A file object, representing a file at a commit in a repository"""

    new: Optional[CommitFile] = UNSET
    """A file object, representing a file at a commit in a repository"""


class DiffStatDict(TypedDict):
    type_: str
    status: NotRequired[StatusOrStr]
    lines_added: NotRequired[int]
    lines_removed: NotRequired[int]
    old: NotRequired[CommitFileDict]
    new: NotRequired[CommitFileDict]
