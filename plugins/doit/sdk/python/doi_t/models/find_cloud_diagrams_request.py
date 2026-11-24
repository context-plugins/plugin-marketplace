from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FindCloudDiagramsRequest(SdkBaseModel):
    """Request body for locating cloud diagrams for given resource IDs."""

    resources: list[str]
    """Resource IDs to find diagrams for."""


class FindCloudDiagramsRequestDict(TypedDict):
    resources: list[str]
