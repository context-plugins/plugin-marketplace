from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudDiagramCostResource(SdkBaseModel):
    """A single resource entry within the top-resources list."""

    id: str
    """Resource id (cloud-native id when available; otherwise the diagram component id)."""

    name: str
    """Human-readable resource name."""

    type_: str = Field(alias="type")
    """Resource type label (e.g. ``ec2``, ``rds``)."""

    amount: float
    """Cost amount for this resource within the snapshot window."""


class CloudDiagramCostResourceDict(TypedDict):
    id: str
    name: str
    type_: str
    amount: float
