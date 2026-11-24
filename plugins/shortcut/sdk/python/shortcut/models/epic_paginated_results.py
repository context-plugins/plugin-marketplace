from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .epic_slim import EpicSlim, EpicSlimDict


class EpicPaginatedResults(SdkBaseModel):
    """Results schema for paginated Epic listing."""

    model_config = ConfigDict(extra="forbid")

    data: list[EpicSlim]
    """Array of Epic objects on the current page"""

    next: int | None
    """The next page number if there are more results, or null for the last page"""

    total: int
    """The total number of Epics matching the query over all pages"""


class EpicPaginatedResultsDict(TypedDict):
    data: list[EpicSlimDict]
    next: int | None
    total: int
