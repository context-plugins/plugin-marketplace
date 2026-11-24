from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .links_bitbucket_branching_model_api import LinksBitbucketBranchingModelApi, LinksBitbucketBranchingModelApiDict


class Ref(SdkBaseModel):
    """A ref object, representing a branch or tag in a repository."""

    type_: str = Field(alias="type")
    links: Optional[LinksBitbucketBranchingModelApi] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET


class RefDict(TypedDict):
    type_: str
    links: NotRequired[LinksBitbucketBranchingModelApiDict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
