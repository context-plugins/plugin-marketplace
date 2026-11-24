from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Summary(SdkBaseModel):
    """Aggregate counts for the batch."""

    total: int
    """Total number of tasks submitted in the batch."""

    succeeded: int
    """Number of tasks successfully created."""

    failed: int
    """Number of tasks that failed validation or processing."""


class SummaryDict(TypedDict):
    total: int
    succeeded: int
    failed: int
