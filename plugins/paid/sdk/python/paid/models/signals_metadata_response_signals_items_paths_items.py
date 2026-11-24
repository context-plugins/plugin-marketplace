from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SignalsMetadataResponseSignalsItemsPathsItems(SdkBaseModel):
    path: str
    """JSON path inside the signal ``data`` payload, usable in queries as e.g. ``data.<path>::String``."""

    types: list[str]
    """ClickHouse dynamic types observed for this path."""


class SignalsMetadataResponseSignalsItemsPathsItemsDict(TypedDict):
    path: str
    types: list[str]
