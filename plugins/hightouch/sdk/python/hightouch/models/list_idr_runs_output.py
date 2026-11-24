from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .idr_run import IdrRun, IdrRunDict


class ListIdrRunsOutput(SdkBaseModel):
    """The output of a request to list runs for an IDR graph."""

    model_config = ConfigDict(extra="forbid")

    data: list[IdrRun]
    has_more: bool = Field(alias="hasMore")


class ListIdrRunsOutputDict(TypedDict):
    data: list[IdrRunDict]
    has_more: bool
