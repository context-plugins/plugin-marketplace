from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudDiagramCostServiceBreakdown(SdkBaseModel):
    """A single service entry within the cost-by-service breakdown."""

    service: str
    """Cloud service label (e.g. ``EC2``)."""

    amount: float
    """Cost amount for this service within the snapshot window."""


class CloudDiagramCostServiceBreakdownDict(TypedDict):
    service: str
    amount: float
