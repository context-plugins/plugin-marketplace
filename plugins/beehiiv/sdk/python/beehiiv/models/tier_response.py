from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tier import Tier, TierDict


class TierResponse(SdkBaseModel):
    data: Optional[Tier] = UNSET
    """The subscription tier object."""


class TierResponseDict(TypedDict):
    data: NotRequired[TierDict]
