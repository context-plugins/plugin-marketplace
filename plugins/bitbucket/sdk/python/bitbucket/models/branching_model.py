from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .branch_type_bitbucket_branching_model_api import (
    BranchTypeBitbucketBranchingModelApi,
    BranchTypeBitbucketBranchingModelApiDict,
)
from .development1 import Development1, Development1Dict
from .production1 import Production1, Production1Dict


class BranchingModel(SdkBaseModel):
    """All Of object, branching_model."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    branch_types: Optional[list[BranchTypeBitbucketBranchingModelApi]] = UNSET
    """The active branch types."""

    development: Optional[Development1] = UNSET
    production: Optional[Production1] = UNSET


class BranchingModelDict(TypedDict):
    type_: NotRequired[str]
    branch_types: NotRequired[list[BranchTypeBitbucketBranchingModelApiDict]]
    development: NotRequired[Development1Dict]
    production: NotRequired[Production1Dict]
