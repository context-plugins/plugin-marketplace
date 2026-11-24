from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TaskRunSourceStats2(SdkBaseModel):
    """Source stats describing progress so far."""

    num_sources_considered: int
    """Number of sources considered in processing the task."""

    num_sources_read: int
    """Number of sources read in processing the task."""

    sources_read_sample: list[str]
    """A sample of URLs of sources read in processing the task."""


class TaskRunSourceStats2Dict(TypedDict):
    num_sources_considered: int
    num_sources_read: int
    sources_read_sample: list[str]
