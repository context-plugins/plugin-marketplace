from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .content import Content, ContentDict
from .inline import Inline, InlineDict
from .links_bitbucket_commits_api import LinksBitbucketCommitsApi, LinksBitbucketCommitsApiDict


class Comment(SdkBaseModel):
    """All Of object, comment."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[int] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    content: Optional[Content] = UNSET
    user: Optional[Account] = UNSET
    deleted: Optional[bool] = UNSET
    parent: Optional[Comment] = UNSET
    inline: Optional[Inline] = UNSET
    links: Optional[LinksBitbucketCommitsApi] = UNSET


class CommentDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    content: NotRequired[ContentDict]
    user: NotRequired[AccountDict]
    deleted: NotRequired[bool]
    parent: NotRequired[CommentDict]
    inline: NotRequired[InlineDict]
    links: NotRequired[LinksBitbucketCommitsApiDict]
