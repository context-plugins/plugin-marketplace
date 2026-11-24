from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.merge_strategy import MergeStrategyOrStr


class PullRequestBranch(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    merge_strategies: Optional[list[MergeStrategyOrStr]] = UNSET
    """Available merge strategies, when this endpoint is the destination of the pull request."""

    default_merge_strategy: Optional[str] = UNSET
    """The default merge strategy, when this endpoint is the destination of the pull request."""


class PullRequestBranchDict(TypedDict):
    name: NotRequired[str]
    merge_strategies: NotRequired[list[MergeStrategyOrStr]]
    default_merge_strategy: NotRequired[str]
