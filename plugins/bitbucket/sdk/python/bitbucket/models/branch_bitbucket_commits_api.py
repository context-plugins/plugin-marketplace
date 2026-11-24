from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .enums.merge_strategy import MergeStrategyOrStr
from .links3 import Links3, Links3Dict


class BranchBitbucketCommitsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    links: Optional[Links3] = UNSET
    name: Optional[str] = UNSET
    """The name of the ref."""

    target: Optional[Commit] = UNSET
    merge_strategies: Optional[list[MergeStrategyOrStr]] = UNSET
    """Available merge strategies for pull requests targeting this branch."""

    default_merge_strategy: Optional[str] = UNSET
    """The default merge strategy for pull requests targeting this branch."""


class BranchBitbucketCommitsApiDict(TypedDict):
    type_: str
    links: NotRequired[Links3Dict]
    name: NotRequired[str]
    target: NotRequired[CommitDict]
    merge_strategies: NotRequired[list[MergeStrategyOrStr]]
    default_merge_strategy: NotRequired[str]
