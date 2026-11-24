from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class EssentialsResponse(SdkBaseModel):
    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    organization: Any
    """Identity, address, classification and headline financials."""


class EssentialsResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    organization: Any
