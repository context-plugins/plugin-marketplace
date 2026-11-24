from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .branch_type_bitbucket_branching_model_api import (
    BranchTypeBitbucketBranchingModelApi,
    BranchTypeBitbucketBranchingModelApiDict,
)
from .development import Development, DevelopmentDict
from .production import Production, ProductionDict


class ProjectBranchingModel(SdkBaseModel):
    """All Of object, project_branching_model."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    branch_types: Optional[list[BranchTypeBitbucketBranchingModelApi]] = UNSET
    """The active branch types."""

    development: Optional[Development] = UNSET
    production: Optional[Production] = UNSET


class ProjectBranchingModelDict(TypedDict):
    type_: NotRequired[str]
    branch_types: NotRequired[list[BranchTypeBitbucketBranchingModelApiDict]]
    development: NotRequired[DevelopmentDict]
    production: NotRequired[ProductionDict]
