from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1InternationalVinDecoderResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    attributes: Optional[Any] = UNSET
    """Decoded vehicle attributes."""

    timestamp: Optional[str] = UNSET


class V1InternationalVinDecoderResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    attributes: NotRequired[Any]
    timestamp: NotRequired[str]
