from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .author import Author, AuthorDict
from .base_commit import BaseCommit, BaseCommitDict
from .committer import Committer, CommitterDict
from .links_bitbucket_snippets_api import LinksBitbucketSnippetsApi, LinksBitbucketSnippetsApiDict
from .snippet import Snippet, SnippetDict
from .summary import Summary, SummaryDict


class SnippetCommit(SdkBaseModel):
    """All Of base_commit, object, snippet_commit."""

    hash: Optional[str] = UNSET
    date: Optional[RFC3339DateTime] = UNSET
    author: Optional[Author] = UNSET
    committer: Optional[Committer] = UNSET
    message: Optional[str] = UNSET
    summary: Optional[Summary] = UNSET
    parents: Optional[list[BaseCommit]] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[LinksBitbucketSnippetsApi] = UNSET
    snippet: Optional[Snippet] = UNSET


class SnippetCommitDict(TypedDict):
    hash: NotRequired[str]
    date: NotRequired[RFC3339DateTime]
    author: NotRequired[AuthorDict]
    committer: NotRequired[CommitterDict]
    message: NotRequired[str]
    summary: NotRequired[SummaryDict]
    parents: NotRequired[list[BaseCommitDict]]
    type_: NotRequired[str]
    links: NotRequired[LinksBitbucketSnippetsApiDict]
    snippet: NotRequired[SnippetDict]
