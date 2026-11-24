from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1VinocrResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    vin: Optional[str] = UNSET
    box: Optional[Any] = UNSET
    confidence: Optional[float] = UNSET
    candidates: Optional[list[Any]] = UNSET


class V1VinocrResponseDict(TypedDict):
    success: NotRequired[bool]
    vin: NotRequired[str]
    box: NotRequired[Any]
    confidence: NotRequired[float]
    candidates: NotRequired[list[Any]]
