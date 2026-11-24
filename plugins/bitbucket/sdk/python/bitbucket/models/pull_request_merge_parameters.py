from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.merge_strategy2 import MergeStrategy2, MergeStrategy2OrStr


class PullRequestMergeParameters(SdkBaseModel):
    """The metadata that describes a pull request merge."""

    type_: str = Field(alias="type")
    message: Optional[str] = UNSET
    """The commit message that will be used on the resulting commit. Note that the size of the message is limited to 128
    KiB."""

    close_source_branch: Optional[bool] = UNSET
    """Whether the source branch should be deleted. If this is not provided, we fallback to the value used when the pull
    request was created, which defaults to False"""

    merge_strategy: MergeStrategy2OrStr = MergeStrategy2.MERGE_COMMIT
    """The merge strategy that will be used to merge the pull request."""


class PullRequestMergeParametersDict(TypedDict):
    type_: str
    message: NotRequired[str]
    close_source_branch: NotRequired[bool]
    merge_strategy: NotRequired[MergeStrategy2OrStr]
