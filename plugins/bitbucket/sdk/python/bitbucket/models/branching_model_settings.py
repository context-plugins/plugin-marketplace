from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .branch_type2 import BranchType2, BranchType2Dict
from .development2 import Development2, Development2Dict
from .links import Links, LinksDict
from .production2 import Production2, Production2Dict


class BranchingModelSettings(SdkBaseModel):
    """All Of object, branching_model_settings."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links] = UNSET
    branch_types: Optional[list[BranchType2]] = UNSET
    development: Optional[Development2] = UNSET
    production: Optional[Production2] = UNSET


class BranchingModelSettingsDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[LinksDict]
    branch_types: NotRequired[list[BranchType2Dict]]
    development: NotRequired[Development2Dict]
    production: NotRequired[Production2Dict]
