from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ItemsRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    amount: Optional[int] = UNSET
    """Price in paise."""

    currency: Optional[str] = UNSET
    active: Optional[bool] = UNSET


class ItemsRequest1Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[str]
    active: NotRequired[bool]
