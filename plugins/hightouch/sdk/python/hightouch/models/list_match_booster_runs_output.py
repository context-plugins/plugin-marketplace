from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .match_booster_run import MatchBoosterRun, MatchBoosterRunDict


class ListMatchBoosterRunsOutput(SdkBaseModel):
    """The output of a request to list Match Booster enrichment runs for a model."""

    model_config = ConfigDict(extra="forbid")

    data: list[MatchBoosterRun]
    has_more: bool = Field(alias="hasMore")


class ListMatchBoosterRunsOutputDict(TypedDict):
    data: list[MatchBoosterRunDict]
    has_more: bool
