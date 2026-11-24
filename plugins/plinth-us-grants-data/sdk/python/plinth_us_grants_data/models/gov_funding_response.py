from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class GovFundingResponse(SdkBaseModel):
    """Federal (USAspending) and state-checkbook money this EIN received."""

    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    ein: str
    federal: Optional[Any] = UNSET
    state: Optional[Any] = UNSET


class GovFundingResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    ein: str
    federal: NotRequired[Any]
    state: NotRequired[Any]
