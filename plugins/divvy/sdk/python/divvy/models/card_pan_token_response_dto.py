from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardPanTokenResponseDto(SdkBaseModel):
    """Card PAN token response."""

    token: Optional[str] = UNSET
    """PAN JWT token"""


class CardPanTokenResponseDtoDict(TypedDict):
    token: NotRequired[str]
