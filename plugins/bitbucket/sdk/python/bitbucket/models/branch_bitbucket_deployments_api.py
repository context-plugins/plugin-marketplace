from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .enums.merge_strategy import MergeStrategyOrStr
from .links2_bitbucket_deployments_api import Links2BitbucketDeploymentsApi, Links2BitbucketDeploymentsApiDict


class BranchBitbucketDeploymentsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    links: Optional[Links2BitbucketDeploymentsApi] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET
    merge_strategies: Optional[list[MergeStrategyOrStr]] = UNSET
    """Available merge strategies for pull requests targeting this branch."""

    default_merge_strategy: Optional[str] = UNSET
    """The default merge strategy for pull requests targeting this branch."""


class BranchBitbucketDeploymentsApiDict(TypedDict):
    type_: str
    links: NotRequired[Links2BitbucketDeploymentsApiDict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
    merge_strategies: NotRequired[list[MergeStrategyOrStr]]
    default_merge_strategy: NotRequired[str]
