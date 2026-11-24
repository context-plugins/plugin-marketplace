from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PullRequestCommit(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    hash: Optional[str] = UNSET


class PullRequestCommitDict(TypedDict):
    hash: NotRequired[str]
