from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_summary import BuildSummary, BuildSummaryDict


class BuildGroup(SdkBaseModel):
    identifier: Optional[str] = UNSET
    """Contains the identifier of the build group."""

    depends_on: Optional[list[str]] = Field(default=UNSET, alias="dependsOn")
    """An array of strings that contain the identifiers of the build groups that this build group depends on."""

    ignore_failure: Optional[bool] = Field(default=UNSET, alias="ignoreFailure")
    """Specifies if failures in this build group can be ignored."""

    current_build_summary: Optional[BuildSummary] = Field(default=UNSET, alias="currentBuildSummary")
    prior_build_summary_list: Optional[list[BuildSummary]] = Field(default=UNSET, alias="priorBuildSummaryList")
    """An array of BuildSummary objects that contain summaries of previous build groups."""


class BuildGroupDict(TypedDict):
    identifier: NotRequired[str]
    depends_on: NotRequired[list[str]]
    ignore_failure: NotRequired[bool]
    current_build_summary: NotRequired[BuildSummaryDict]
    prior_build_summary_list: NotRequired[list[BuildSummaryDict]]
