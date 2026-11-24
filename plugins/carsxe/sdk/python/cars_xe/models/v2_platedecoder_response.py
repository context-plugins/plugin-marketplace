from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V2PlatedecoderResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    description: Optional[str] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    trim: Optional[str] = UNSET
    vin: Optional[str] = UNSET
    year: Optional[str] = UNSET


class V2PlatedecoderResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    description: NotRequired[str]
    make: NotRequired[str]
    model: NotRequired[str]
    trim: NotRequired[str]
    vin: NotRequired[str]
    year: NotRequired[str]
