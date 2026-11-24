from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CostIngestResponse(SdkBaseModel):
    ingested: int
    """Number of records persisted."""

    duplicates: int
    """Number of records skipped because their ``idempotencyKey`` matched a previously ingested record."""


class CostIngestResponseDict(TypedDict):
    ingested: int
    duplicates: int
