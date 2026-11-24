from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .author import Author, AuthorDict
from .committer import Committer, CommitterDict
from .summary import Summary, SummaryDict


class BaseCommit(SdkBaseModel):
    """All Of object, base_commit."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    hash: Optional[str] = UNSET
    date: Optional[RFC3339DateTime] = UNSET
    author: Optional[Author] = UNSET
    committer: Optional[Committer] = UNSET
    message: Optional[str] = UNSET
    summary: Optional[Summary] = UNSET
    parents: Optional[list[BaseCommit]] = UNSET


class BaseCommitDict(TypedDict):
    type_: NotRequired[str]
    hash: NotRequired[str]
    date: NotRequired[RFC3339DateTime]
    author: NotRequired[AuthorDict]
    committer: NotRequired[CommitterDict]
    message: NotRequired[str]
    summary: NotRequired[SummaryDict]
    parents: NotRequired[list[BaseCommitDict]]
