from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuccessResponse(SdkBaseModel):
    success: Optional[bool] = UNSET


class SuccessResponseDict(TypedDict):
    success: NotRequired[bool]
