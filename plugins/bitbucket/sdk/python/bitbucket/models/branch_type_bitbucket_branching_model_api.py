from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind_bitbucket_branching_model_api import KindBitbucketBranchingModelApiOrStr


class BranchTypeBitbucketBranchingModelApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    kind: KindBitbucketBranchingModelApiOrStr
    """The kind of branch."""

    prefix: str
    """The prefix for this branch type. A branch with this prefix will be classified as per ``kind``. The prefix must be
    a valid prefix for a branch and must always exist. It cannot be blank, empty or ``null``."""


class BranchTypeBitbucketBranchingModelApiDict(TypedDict):
    kind: KindBitbucketBranchingModelApiOrStr
    prefix: str
