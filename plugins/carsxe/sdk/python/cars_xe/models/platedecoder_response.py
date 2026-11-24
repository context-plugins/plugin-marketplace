from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlatedecoderResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    vin: Optional[str] = UNSET


class PlatedecoderResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    vin: NotRequired[str]
