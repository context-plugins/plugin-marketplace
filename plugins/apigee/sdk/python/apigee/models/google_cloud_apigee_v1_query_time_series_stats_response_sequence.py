from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence(SdkBaseModel):
    """A sequence of time series."""

    dimensions: Optional[dict[str, str]] = UNSET
    """Map of dimensions and their values that uniquely identifies a time series sequence."""

    points: Optional[list[list[Any]]] = UNSET
    """List of points. First value of each inner list is a timestamp."""


class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceDict(TypedDict):
    dimensions: NotRequired[dict[str, str]]
    points: NotRequired[list[list[Any]]]
