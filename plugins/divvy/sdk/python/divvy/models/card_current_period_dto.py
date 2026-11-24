from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardCurrentPeriodDto(SdkBaseModel):
    """DTO representing card values relevant to the current budget period."""

    limit: Optional[float] = UNSET
    """Card spend limit for the current budget period"""

    spent: Optional[float] = UNSET
    """Amount spent with the card for the current budget period"""


class CardCurrentPeriodDtoDict(TypedDict):
    limit: NotRequired[float]
    spent: NotRequired[float]
