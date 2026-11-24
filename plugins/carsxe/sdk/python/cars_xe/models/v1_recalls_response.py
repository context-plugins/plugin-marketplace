from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1RecallsResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    data: Optional[Any] = UNSET
    """Recall report for the VIN."""

    timestamp: Optional[str] = UNSET


class V1RecallsResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    data: NotRequired[Any]
    timestamp: NotRequired[str]
