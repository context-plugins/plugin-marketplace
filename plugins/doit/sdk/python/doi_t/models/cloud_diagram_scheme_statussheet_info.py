from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudDiagramSchemeStatussheetInfo(SdkBaseModel):
    """Summary of a cloud account (layer) connected to a diagram."""

    ssid: str
    """Layer ID."""

    name: str
    """Layer name."""

    account_name: str
    """Connected cloud account name."""

    alarms_count: int
    """Number of active alarms."""

    empty: bool
    """True when the layer contains no components."""

    color: str
    """Layer color."""


class CloudDiagramSchemeStatussheetInfoDict(TypedDict):
    ssid: str
    name: str
    account_name: str
    alarms_count: int
    empty: bool
    color: str
