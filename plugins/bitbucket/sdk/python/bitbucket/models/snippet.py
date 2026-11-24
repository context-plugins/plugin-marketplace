from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .enums.scm_bitbucket_snippets_api import ScmBitbucketSnippetsApiOrStr


class Snippet(SdkBaseModel):
    """All Of object, snippet."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[int] = UNSET
    title: Optional[str] = UNSET
    scm: Optional[ScmBitbucketSnippetsApiOrStr] = UNSET
    """The DVCS used to store the snippet."""

    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    owner: Optional[Account] = UNSET
    creator: Optional[Account] = UNSET
    is_private: Optional[bool] = UNSET


class SnippetDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[int]
    title: NotRequired[str]
    scm: NotRequired[ScmBitbucketSnippetsApiOrStr]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    owner: NotRequired[AccountDict]
    creator: NotRequired[AccountDict]
    is_private: NotRequired[bool]
