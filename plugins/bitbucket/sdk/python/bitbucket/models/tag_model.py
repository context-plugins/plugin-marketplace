from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .author import Author, AuthorDict
from .commit import Commit, CommitDict
from .links_bitbucket_branching_model_api import LinksBitbucketBranchingModelApi, LinksBitbucketBranchingModelApiDict


class TagModel(SdkBaseModel):
    type_: str = Field(alias="type")
    links: Optional[LinksBitbucketBranchingModelApi] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET
    message: Optional[str] = UNSET
    """The message associated with the tag, if available."""

    date: Optional[RFC3339DateTime] = UNSET
    """The date that the tag was created, if available"""

    tagger: Optional[Author] = UNSET


class TagModelDict(TypedDict):
    type_: str
    links: NotRequired[LinksBitbucketBranchingModelApiDict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
    message: NotRequired[str]
    date: NotRequired[RFC3339DateTime]
    tagger: NotRequired[AuthorDict]
