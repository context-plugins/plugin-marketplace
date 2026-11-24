from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .enums.merge_strategy import MergeStrategyOrStr
from .links_bitbucket_branching_model_api import LinksBitbucketBranchingModelApi, LinksBitbucketBranchingModelApiDict


class Branch(SdkBaseModel):
    type_: str = Field(alias="type")
    links: Optional[LinksBitbucketBranchingModelApi] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET
    merge_strategies: Optional[list[MergeStrategyOrStr]] = UNSET
    """Available merge strategies for pull requests targeting this branch."""

    default_merge_strategy: Optional[str] = UNSET
    """The default merge strategy for pull requests targeting this branch."""


class BranchDict(TypedDict):
    type_: str
    links: NotRequired[LinksBitbucketBranchingModelApiDict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
    merge_strategies: NotRequired[list[MergeStrategyOrStr]]
    default_merge_strategy: NotRequired[str]
