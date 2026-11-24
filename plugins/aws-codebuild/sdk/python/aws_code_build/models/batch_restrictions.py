from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchRestrictions(SdkBaseModel):
    maximum_builds_allowed: Optional[int] = Field(default=UNSET, alias="maximumBuildsAllowed")
    """Specifies the maximum number of builds allowed."""

    compute_types_allowed: Optional[list[str]] = Field(default=UNSET, alias="computeTypesAllowed")
    """An array of strings that specify the compute types that are allowed for the batch build. See Build environment
    compute types in the CodeBuild User Guide for these values."""

    fleets_allowed: Optional[list[str]] = Field(default=UNSET, alias="fleetsAllowed")
    """An array of strings that specify the fleets that are allowed for the batch build. See Run builds on reserved
    capacity fleets in the CodeBuild User Guide for more information."""


class BatchRestrictionsDict(TypedDict):
    maximum_builds_allowed: NotRequired[int]
    compute_types_allowed: NotRequired[list[str]]
    fleets_allowed: NotRequired[list[str]]
