from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudDiagramCostTrendBucket(SdkBaseModel):
    """A single bucket in the trend series."""

    bucket_start: str = Field(alias="bucketStart")
    """Inclusive start of this bucket. ISO date for ``day`` and ``month``; week label for ``week``."""

    amount: float
    """Total cost for this bucket."""


class CloudDiagramCostTrendBucketDict(TypedDict):
    bucket_start: str
    amount: float
