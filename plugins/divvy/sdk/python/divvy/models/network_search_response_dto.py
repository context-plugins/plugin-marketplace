from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .network import Network, NetworkDict


class NetworkSearchResponseDto(SdkBaseModel):
    """Network search response."""

    results: Optional[list[Network]] = UNSET
    """Results that match the search criteria"""


class NetworkSearchResponseDtoDict(TypedDict):
    results: NotRequired[list[NetworkDict]]
