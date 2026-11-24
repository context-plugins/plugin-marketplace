from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class PremierResponse(SdkBaseModel):
    """Everything we hold on one organization, in one call."""

    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    organization: Any
    financials: Optional[Any] = UNSET
    grantmaking: Optional[Any] = UNSET
    funding_received: Optional[Any] = UNSET
    governance: Optional[Any] = UNSET
    government_funding: Optional[Any] = UNSET
    geo_footprint: Optional[list[Any]] = UNSET
    source_tier: Optional[str] = UNSET
    """Which layer answered: ``universe`` or a bespoke enrichment."""


class PremierResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    organization: Any
    financials: NotRequired[Any]
    grantmaking: NotRequired[Any]
    funding_received: NotRequired[Any]
    governance: NotRequired[Any]
    government_funding: NotRequired[Any]
    geo_footprint: NotRequired[list[Any]]
    source_tier: NotRequired[str]
